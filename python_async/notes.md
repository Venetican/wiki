# Asynchronous Programming in Python

## Introduction to Asynchronous Programming

### What is Asynchronous Programming?

Asynchronous programming is a programming paradigm that allows processing **multiple tasks concurrently** without having to wait for one to complete before starting another. Unlike synchronous programming, where code executes sequentially (line by line), asynchronous code can **suspend** execution of one task and switch to another while the first waits for some operation to complete (e.g., network requests, file reading).

### Why Use Asynchronous Programming?

**Main advantages:**
- **Efficient time usage** - instead of waiting for I/O operations, the program can work on other tasks
- **High concurrency** - can handle thousands of concurrent requests
- **Scalability** - ideal for web servers, APIs, scrapers
- **Low overhead** - one thread instead of many threads

**When to use:**
- Network operations (HTTP requests, WebSocket)
- Database queries
- File reading/writing
- All I/O-bound operations (operations waiting for input/output)

**When NOT to use:**
- CPU-bound operations (heavy computations, ML models)
- Simple scripts without I/O operations

---

## The asyncio Library - Basics

### What is asyncio?

`asyncio` is Python's standard library for writing asynchronous code using **coroutines**, **event loop**, and **tasks**.

### Key Components of asyncio

1. **Event Loop** - central mechanism that manages and runs asynchronous tasks
2. **Coroutines** - functions defined with `async def` that can be suspended and resumed
3. **Tasks** - coroutines wrapped into objects scheduled in the event loop
4. **Awaitables** - objects that can be used with `await` (coroutines, tasks, futures)

### Basic Structure of an asyncio Program

```python
import asyncio

async def main():
    # Asynchronous code here
    print("Hello")
    await asyncio.sleep(1)  # Suspends execution for 1 second
    print("World")

# Running the asyncio program
asyncio.run(main())
```

---

## Execution Models in Python

Python offers several ways to process multiple tasks concurrently. Each model has its advantages and disadvantages.

### 1. Synchronous Execution (Blocking)

**How it works:**
- One thread executes one operation at a time
- Each operation must complete before starting the next
- Blocking I/O stops the entire program

**Properties:**
- ✅ Simple to understand
- ✅ Easy debugging
- ❌ Inefficient for I/O operations
- ❌ Poor scalability

**Example:**
```python
import requests

# Each request blocks the program
data1 = requests.get("https://api.com/a")  # waits for response
data2 = requests.get("https://api.com/b")  # waits for response
data3 = requests.get("https://api.com/c")  # waits for response
# Total time = sum of all waiting times
```

---

### 2. Multithreading (Multiple Threads)

**How it works:**
- One Python process → one GIL (Global Interpreter Lock)
- Multiple threads exist, but **only one executes Python bytecode at a time**
- OS scheduler rapidly switches threads → *pseudo-parallelism*
- True concurrency only when threads **release GIL during I/O** (network, disk, DB)

**Properties:**
- ✅ Multiple threads
- ✅ OS manages switching
- ✅ Efficient for I/O-bound operations
- ❌ No CPU parallelism (GIL blocks it)
- ❌ Not good for CPU-heavy work

**Example:**
```python
import threading
import requests

def fetch(url):
    r = requests.get(url)
    print(len(r.text))

threads = []
for u in ["https://api.com/a", "https://api.com/b", "https://api.com/c"]:
    t = threading.Thread(target=fetch, args=(u,))
    t.start()
    threads.append(t)

for t in threads:
    t.join()  # Waits for all threads to complete
```

---

### 3. Asyncio (Event Loop, Coroutines)

**How it works:**
- One thread, one event loop
- Many *coroutines* scheduled by the loop
- **Only one coroutine runs at any instant**
- When coroutine hits `await` on I/O → it yields control → loop runs another task
- Creates *concurrency*, NOT parallelism

**Properties:**
- ✅ Single thread (low overhead)
- ✅ Many async tasks (coroutines)
- ✅ Event loop switches on `await`
- ✅ Extremely high I/O concurrency
- ❌ No parallel CPU execution
- ❌ CPU-bound code blocks entire loop

**Example:**
```python
import asyncio
import aiohttp

async def fetch(session, url):
    async with session.get(url) as r:
        return await r.text()

async def main():
    async with aiohttp.ClientSession() as session:
        tasks = [fetch(session, u) for u in [
            "https://api.com/a",
            "https://api.com/b",
            "https://api.com/c"
        ]]
        results = await asyncio.gather(*tasks)
        print([len(r) for r in results])

asyncio.run(main())
```

---

### 4. Multiprocessing (Multiple Processes, True Parallelism)

**How it works:**
- Each process = its own memory + its own Python interpreter + its own GIL
- Processes execute **in true parallel** across CPU cores
- Ideal for CPU-bound tasks (ML, image processing, computation)
- Expensive: memory-heavy, slow IPC, high overhead

**Properties:**
- ✅ Multiple processes
- ✅ True CPU parallelism
- ✅ GIL does not interfere
- ❌ Heavy memory usage
- ❌ Slow process communication
- ❌ Not suitable for high I/O concurrency in APIs

**Example:**
```python
from multiprocessing import Pool
import math

def compute(x):
    return math.sqrt(x * x * x * x)

if __name__ == "__main__":
    with Pool() as p:
        print(p.map(compute, range(10_000)))
```

---

### Comparison Table

| Model            | Threads/Processes | Parallelism | Who Switches?     | Best For                   |
|-----------------|-------------------|-------------|--------------------|-----------------------------|
| Synchronous     | 1 thread          | ❌          | none               | simple scripts              |
| Multithreading  | many threads      | ❌ (GIL)    | OS scheduler       | I/O-bound sync code         |
| Asyncio         | 1 thread          | ❌          | event loop         | massive I/O concurrency     |
| Multiprocessing | many processes    | ✔           | OS scheduler       | CPU-bound computations      |

---

### Key Distinctions

- **Concurrency** = tasks make progress by switching when waiting (threads I/O, asyncio)
- **Parallelism** = tasks run simultaneously on CPU (multiprocessing)

**Important:** Asyncio creates **concurrency**, not parallelism. Everything runs in one thread, but tasks switch efficiently.

---

## Coroutines - The Fundamental Building Block

### What is a Coroutine?

A **coroutine** is an object representing a **pausable and resumable function**. Created by calling a function defined with `async def`:

```python
async def foo():
    print("hi")

c = foo()   # coroutine object
print(c)    # <coroutine object foo at 0x...>
```

**Coroutine properties:**
- Never starts automatically
- Holds internal state (like a generator)
- Controlled by the event loop
- Can pause on `await` and resume later
- Cooperative (decides when to yield)

**Coroutine ≠ Task**
- **Coroutine** = object representing an async function
- **Task** = coroutine wrapped and scheduled in the event loop

---

### Async Functions Always Return Coroutine Objects

**Core rule:**
- Every `async def` function **always** returns a coroutine object
- This holds even if the function:
  - has no `await`
  - returns nothing (`None`)
  - only prints
  - is empty

**Example:**
```python
async def f():
    return 123

result = f()
print(result)  # <coroutine object f at 0x...>
```

**What this means:**
- The coroutine does **not execute automatically**
- It's just suspended code prepared for the event loop
- Must be explicitly executed using `await`, `asyncio.run()`, or `asyncio.create_task()`

**Why does `async def` return a coroutine?**
- Function body does not run immediately
- Python creates a coroutine object that can be:
  - awaited
  - executed via `asyncio.run()`
  - scheduled via `asyncio.create_task()`
  - handed to the event loop

**Analogy:** Similar to a generator - a generator is also created but not executed immediately.

---

## The `await` Keyword - Why It's Essential

### What Does `await` Do?

`await` is a keyword that:
1. **Executes a coroutine** or awaitable object
2. **Suspends the current coroutine** and yields control to the event loop
3. **Waits for completion** of the awaited operation
4. **Resumes execution** exactly where it was suspended

### Basic Example

```python
import asyncio

async def main():
    print("Hello")
    await asyncio.sleep(1)  # Suspends for 1 second
    print("World")

asyncio.run(main())
```

**Output:**
```
Hello
[waits 1 second]
World
```

---

### What Happens Inside `main()`?

1. **`print("Hello")`** → synchronous, instant
2. **`await asyncio.sleep(1)`**:
   - `await` = **yield point** (control handoff point)
   - Coroutine pauses and saves its internal state
   - `sleep(1)` schedules a timer event (wake up in 1s)
   - Event loop is now free and can run:
     - other coroutines
     - socket operations
     - timers
     - tasks
   - After 1s → loop resumes `main()` exactly where it stopped
3. **`print("World")`** executes
4. Coroutine completes → loop ends

---

### Why Must `await` Be Inside an `async` Function?

Async functions are **cooperative**:
- They only pause at explicit yield points (`await`)
- Without `await`:
  - coroutine runs to completion in one step
  - never yields back to event loop
  - blocks all concurrency
  - behaves like a synchronous function wrapped in async syntax

---

### What Happens if There Is No `await`?

```python
async def main():
    print("Hello")
    print("World")

asyncio.run(main())
```

**Output:**
```
Hello
World
```

**What happened:**
- Coroutine started
- Contains **no yield points**
- Runs from start to end **without pausing**
- Event loop provides no concurrency
- No switching, no multitasking

---

### Why Is `await` Mandatory for Running a Coroutine?

Calling:
```python
main()
```

does **NOT** run the function!

- It only creates a coroutine object: `<coroutine object main at 0x...>`
- Nothing inside `main()` is executed
- Python emits:

```
RuntimeWarning: coroutine 'main' was never awaited
```

**Why?**
- Every coroutine must be **awaited** or **scheduled**
- Otherwise it never runs

---

### Correct Ways to Run an Async Function

#### A) Most common
```python
asyncio.run(main())
```

#### B) Await inside another coroutine
```python
async def wrapper():
    await main()

asyncio.run(wrapper())
```

#### C) Schedule as a task
```python
async def main():
    task = asyncio.create_task(some_coroutine())
    await asyncio.sleep(0)  # allow loop to run tasks
    await task
```

---

### Important Paradox

Async function **without `await` inside it**:
- Executes synchronously (runs from start to end without interruption)
- Still **requires** an outer await/event loop to run
- Still produces a coroutine object
- Still must be **awaited** somewhere

**Problem example:**
```python
import asyncio

async def foo():
    print("Foo start")
    print("Foo end")  # no await

async def main():
    asyncio.create_task(foo())  # task created but not executed
    print("Main done")

asyncio.run(main())
```

**Output:**
```
Main done
```

**Reason:**
- `main()` contains no `await` → runs to end in one step
- Event loop never gets a chance to schedule `foo()`

---

### Critical Rule of Asyncio

**"Coroutine without `await` is useless."**

- No yield points
- Never gives control back to the loop
- Cannot be switched or scheduled
- Behaves like synchronous code wrapped in async syntax

---

## `asyncio.run()` - Starting an Asyncio Program

### What Does `asyncio.run()` Do?

`asyncio.run(main())`:
1. Creates a **new event loop** (single thread, single loop)
2. Wraps `main()` into a **coroutine object** (does NOT run it)
3. Schedules the coroutine on the event loop
4. Runs the loop until the coroutine finishes
5. Shuts down the loop

**Flow:**
- loop picks coroutine → runs it → waits for completion → closes

---

### When To Use `asyncio.run()`?

Use only **once**, at the top-level entry point:

```python
if __name__ == "__main__":
    asyncio.run(main())
```

**Never use:**
- ❌ Inside async functions
- ❌ Inside FastAPI handlers
- ❌ Inside uvicorn or Django workers
- ❌ In an already running event loop

**Why?**
- Creates a new event loop
- If one is already running, it causes an error
- Used only to start the entire asyncio program

---

## `asyncio.create_task()` - Concurrent Task Execution

### What Does `asyncio.create_task()` Do?

`asyncio.create_task(coroutine)`:
- Wraps coroutine into a **Task object**
- **Schedules** it in the event loop
- Returns a Task object that can be awaited
- Task starts running **concurrently** with other tasks

---

### When To Use `create_task()`?

Use when you want to run a coroutine **concurrently** with others:

```python
async def a():
    await asyncio.sleep(5)
    print("A done")

async def b():
    await asyncio.sleep(2)
    print("B done")

async def main():
    t1 = asyncio.create_task(a())
    t2 = asyncio.create_task(b())
    print("Both started")
    await t1
    await t2
```

**Effects:**
- Schedules coroutines in the event loop
- They run **concurrently** (simultaneously)
- Without tasks, they run sequentially:
  - `await a()` waits 5s
  - `await b()` waits 2s
  - Total 7s

**With tasks:**
- Both start simultaneously
- Total ~5s (time of longest task)

---

### Complete Example

```python
import asyncio

async def fetch(i):
    print(f"Start {i}")
    await asyncio.sleep(1)
    print(f"End {i}")

async def main():
    t1 = asyncio.create_task(fetch(1))
    t2 = asyncio.create_task(fetch(2))
    await t1
    await t2

asyncio.run(main())
```

**Output:**
```
Start 1
Start 2
End 1
End 2
```

**Flow:**
- `asyncio.run(main())` → creates loop, runs `main`
- `create_task` → schedules two fetch calls
- `await` → yields control
- loop switches between `fetch(1)` and `fetch(2)`
- Total time: ~1s instead of 2s

---

## `asyncio.gather()` - Waiting for Multiple Tasks

### What Does `asyncio.gather()` Do?

`asyncio.gather()` runs multiple coroutines **concurrently** and waits for all to complete:

```python
async def fetch(url):
    # some async operation
    return data

async def main():
    results = await asyncio.gather(
        fetch("url1"),
        fetch("url2"),
        fetch("url3")
    )
    # results contains results in the order they were passed
```

**Advantages:**
- Starts all tasks simultaneously
- Waits for all to complete
- Returns results in argument order
- If one fails, others complete (unless you use `return_exceptions=True`)

---

## How `gather()` Starts All Tasks Immediately

### Understanding Concurrent Execution

`asyncio.gather()` doesn't just wait for coroutines - it **schedules all of them immediately** in the event loop, allowing them to run concurrently from the start.

### What Happens When You Call `gather()`

```python
async def fetch(url):
    print(f"Starting {url}")
    await asyncio.sleep(1)  # Simulate I/O
    print(f"Finished {url}")
    return f"Data from {url}"

async def main():
    results = await asyncio.gather(
        fetch("url1"),
        fetch("url2"),
        fetch("url3")
    )
```

**Execution flow:**

1. **`gather()` is called** → All coroutines are **immediately scheduled** as tasks in the event loop
2. **Event loop starts running** → All three `fetch()` coroutines begin executing concurrently
3. **Each coroutine hits `await asyncio.sleep(1)`** → Yields control, but others continue
4. **Event loop switches** between all three tasks while they wait
5. **All complete** → `gather()` collects results and returns them

**Output:**
```
Starting url1
Starting url2
Starting url3
[all three wait concurrently]
Finished url1
Finished url2
Finished url3
```

**Total time:** ~1 second (not 3 seconds!) because all tasks run concurrently.

### Visual Timeline

```
Time →
gather() called
  ↓
  [All 3 tasks scheduled immediately]
  ↓
  Task 1: fetch("url1") ──────┐
  Task 2: fetch("url2") ──────┤ All start at once
  Task 3: fetch("url3") ──────┘
  ↓
  [Event loop switches between tasks]
  ↓
  All complete ────────────────┐
  ↓                            │
  gather() returns results ────┘
```

### Comparison: Sequential vs Concurrent

**Sequential (slow):**
```python
async def main():
    # Each await blocks until complete
    result1 = await fetch("url1")  # Waits 1s
    result2 = await fetch("url2")  # Waits 1s
    result3 = await fetch("url3")  # Waits 1s
    # Total: 3 seconds
```

**Concurrent with `gather()` (fast):**
```python
async def main():
    # All start immediately, run concurrently
    results = await asyncio.gather(
        fetch("url1"),  # All three scheduled
        fetch("url2"),  # at the same time
        fetch("url3")   # and run concurrently
    )
    # Total: ~1 second (longest task)
```

### How the Event Loop Handles It

When `gather()` is called:

1. **Coroutines are wrapped into Tasks** automatically
2. **Tasks are scheduled** in the event loop's ready queue
3. **Event loop starts executing** them one by one (but rapidly switches)
4. **When a task hits `await`**, it yields control
5. **Event loop picks the next ready task** and continues
6. **This continues** until all tasks complete

**Key insight:** The event loop doesn't wait for one task to finish before starting the next. All tasks are scheduled immediately and run concurrently, switching on `await` points.

### Practical Example: Demonstrating Immediate Start

```python
import asyncio
import time

async def task(name, delay):
    start = time.time()
    print(f"[{time.time() - start:.2f}s] {name} started")
    await asyncio.sleep(delay)
    print(f"[{time.time() - start:.2f}s] {name} finished")
    return name

async def main():
    start_time = time.time()
    
    # All tasks start immediately
    results = await asyncio.gather(
        task("A", 2),
        task("B", 1),
        task("C", 3)
    )
    
    total_time = time.time() - start_time
    print(f"\nAll tasks completed in {total_time:.2f}s")
    print(f"Results: {results}")

asyncio.run(main())
```

**Output:**
```
[0.00s] A started
[0.00s] B started
[0.00s] C started
[1.00s] B finished
[2.00s] A finished
[3.00s] C finished

All tasks completed in 3.00s
Results: ['A', 'B', 'C']
```

Notice how all three tasks start at `0.00s` - they begin immediately, not sequentially!

### Important Notes

1. **`gather()` schedules immediately**: All coroutines become tasks and start running right away
2. **No manual `create_task()` needed**: `gather()` handles task creation automatically
3. **Results preserve order**: Even though tasks may complete in different order, results are returned in argument order
4. **All-or-nothing by default**: If one task fails, others are cancelled (unless `return_exceptions=True`)

### When to Use `gather()` vs `create_task()`

**Use `gather()` when:**
- You want to wait for all tasks to complete
- You need results from all tasks
- Tasks are independent and should all run
- You want automatic error handling

**Use `create_task()` when:**
- You want to start tasks but not wait immediately
- You need more control over individual tasks
- Tasks might be cancelled independently
- You're building more complex concurrency patterns

---

## Summary - When to Use What

### Asyncio Program Structure

```
Top-level (entry point)
  └─> asyncio.run(main())
       │
       └─> async def main()
            ├─> asyncio.create_task()  # for concurrent tasks
            ├─> await                   # for waiting on results
            └─> asyncio.gather()        # for running multiple tasks at once
```

### Usage Rules

| Construct | Where to Use | Purpose |
|-----------|--------------|---------|
| `async def` | Function definition | Creates a coroutine |
| `await` | Inside async function | Runs coroutine + yields control to loop |
| `asyncio.run()` | Top-level only | Starts the entire asyncio program |
| `asyncio.create_task()` | Inside async function | Runs coroutine concurrently |
| `asyncio.gather()` | Inside async function | Runs multiple coroutines and waits for all |

### Compact Rules

- `async def` → creates a coroutine
- `await` → runs a coroutine inside async code + yields control
- `asyncio.run` → starts the whole async world (single entry point)
- `asyncio.create_task` → runs coroutines concurrently
- `asyncio.gather` → runs multiple coroutines and waits for all

**Program structure:**
- Top level: `run()`
- Inside: `create_task()` or `gather()`
- Inside: `await`

---

## Practical Tips and Common Mistakes

### Mistake 1: Forgetting `await`

```python
# WRONG
async def main():
    fetch_data()  # Forgot await!

# CORRECT
async def main():
    await fetch_data()
```

### Mistake 2: `asyncio.run()` Inside Async Function

```python
# WRONG
async def handler():
    asyncio.run(some_coroutine())  # Error! Loop already running

# CORRECT
async def handler():
    await some_coroutine()
```

### Mistake 3: Sequential Instead of Concurrent Execution

```python
# WRONG - sequential (slow)
async def main():
    await fetch("url1")  # waits
    await fetch("url2")  # waits
    await fetch("url3")  # waits

# CORRECT - concurrent (fast)
async def main():
    await asyncio.gather(
        fetch("url1"),
        fetch("url2"),
        fetch("url3")
    )
```

### Tip: Combining `create_task` and `gather`

```python
async def main():
    # Creating tasks
    tasks = [
        asyncio.create_task(fetch(url))
        for url in urls
    ]
    
    # Waiting for all
    results = await asyncio.gather(*tasks)
    
    # Or more simply:
    results = await asyncio.gather(*[fetch(url) for url in urls])
```

---

## Conclusion

Asyncio is a powerful tool for writing highly concurrent applications in Python. The key to success is understanding:

1. **Coroutines** are suspendable functions
2. **`await`** yields control to the event loop
3. **Event loop** manages all asynchronous operations
4. **Tasks** enable concurrent execution
5. **`asyncio.run()`** is the program entry point

Remember: Asyncio creates **concurrency**, not parallelism. Everything runs in one thread, but tasks switch efficiently.

# Synchronous vs Asynchronous Iterators

## Introduction

Iteration is a fundamental concept in Python. When working with asyncio, you'll encounter both synchronous and asynchronous iterators. Understanding the difference is crucial for writing efficient async code.

**Key concept:** 
- **Synchronous iterators** work with data that's immediately available (in memory)
- **Asynchronous iterators** work with data that arrives over time (I/O operations, streams)

---

## Synchronous Iterators

### How They Work

Synchronous iterators use the **iterator protocol** with two special methods:
- `__iter__()` - returns the iterator object itself
- `__next__()` - returns the next value, raises `StopIteration` when done

**Characteristics:**
- ✅ Immediate value retrieval
- ✅ Simple and straightforward
- ❌ **Blocks** execution while iterating
- ❌ CPU waits for each iteration step
- ❌ Not suitable for I/O-bound operations

### Basic Example

```python
# Built-in iterables are synchronous
numbers = [1, 2, 3, 4, 5]

for num in numbers:
    print(num)  # Immediate, blocking execution
```

**What happens internally:**
```python
# Manual iteration (what 'for' loop does)
iterator = iter(numbers)  # calls __iter__()
try:
    while True:
        value = next(iterator)  # calls __next__()
        print(value)
except StopIteration:
    pass  # iteration complete
```

### Custom Synchronous Iterator

```python
class CountDown:
    def __init__(self, start):
        self.current = start
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        self.current -= 1
        return self.current + 1

# Usage
for num in CountDown(5):
    print(num)  # 5, 4, 3, 2, 1
```

---

## Asynchronous Iterators

### How They Work

Asynchronous iterators use the **async iterator protocol** with two special methods:
- `__aiter__()` - returns the async iterator object itself
- `__anext__()` - returns a coroutine that yields the next value, raises `StopAsyncIteration` when done

**Characteristics:**
- ✅ **Non-blocking** - event loop can switch to other tasks
- ✅ Perfect for I/O operations
- ✅ Enables concurrency during iteration
- ✅ Ideal for streaming data, WebSockets, APIs
- ⚠️ Must be used with `async for` (not regular `for`)

### Basic Example

The simplest way to create an async iterator is using an **async generator** (async function with `yield`):

```python
import asyncio

async def countdown(start):
    """Simple async generator - no need to implement __aiter__ or __anext__"""
    for num in range(start, 0, -1):
        await asyncio.sleep(0.5)  # Simulate I/O wait (non-blocking)
        yield num

async def main():
    async for num in countdown(5):
        print(num)  # 5, 4, 3, 2, 1 (with 0.5s delay between each)

asyncio.run(main())
```

**Output:**
```
5
[waits 0.5s]
4
[waits 0.5s]
3
[waits 0.5s]
2
[waits 0.5s]
1
```

**Key points:**
- `async def` with `yield` automatically creates an async iterator
- No need to manually implement `__aiter__()` or `__anext__()`
- Each `await` in the generator yields control to the event loop
- Other tasks can run while waiting for the next value

**What happens internally:**
```python
# What 'async for' does behind the scenes
async def manual_async_iteration():
    async_gen = countdown(5)
    async_iterator = async_gen.__aiter__()  # Python does this automatically
    
    try:
        while True:
            value = await async_iterator.__anext__()  # Must await!
            print(value)
    except StopAsyncIteration:
        pass  # iteration complete
```

**Note:** You rarely need to call `__aiter__()` or `__anext__()` directly - `async for` handles it automatically!

---

## When to Use Async Iterators

### Use Async Iterators When:

1. **Each iteration involves I/O waiting:**
   - Fetching data from APIs
   - Reading from async streams
   - Receiving WebSocket messages
   - Database queries

2. **Data arrives gradually over time:**
   - Streaming responses
   - Real-time data feeds
   - Large files read in chunks

3. **You need concurrency during iteration:**
   - Other tasks should run while iterating
   - Multiple async iterators running simultaneously

### Practical Example: Fetching Paginated API Data

```python
import asyncio
import aiohttp

class PaginatedAPI:
    def __init__(self, base_url, session):
        self.base_url = base_url
        self.session = session
        self.page = 1
        self.has_more = True
    
    def __aiter__(self):
        return self
    
    async def __anext__(self):
        if not self.has_more:
            raise StopAsyncIteration
        
        # Fetch next page (I/O operation)
        url = f"{self.base_url}?page={self.page}"
        async with self.session.get(url) as response:
            data = await response.json()
        
        # Check if there are more pages
        self.has_more = data.get('has_more', False)
        self.page += 1
        
        return data['items']

async def main():
    async with aiohttp.ClientSession() as session:
        api = PaginatedAPI("https://api.example.com/items", session)
        
        async for items in api:
            print(f"Received {len(items)} items")
            # Process items while next page loads concurrently

asyncio.run(main())
```

---

## Async Generators: The Simpler Alternative

In most cases, **async generators** are simpler and more Pythonic than async iterators.

### Async Iterator (More Verbose)

```python
class AsyncNumbers:
    def __init__(self, start, end):
        self.current = start
        self.end = end
    
    def __aiter__(self):
        return self
    
    async def __anext__(self):
        if self.current >= self.end:
            raise StopAsyncIteration
        
        await asyncio.sleep(0.1)  # Simulate I/O
        value = self.current
        self.current += 1
        return value
```

### Async Generator (Recommended)

```python
async def async_numbers(start, end):
    """Much simpler - just use async def with yield"""
    for num in range(start, end):
        await asyncio.sleep(0.1)  # Simulate I/O
        yield num

# Usage is identical
async def main():
    async for num in async_numbers(1, 5):
        print(num)

asyncio.run(main())
```

**Why prefer async generators:**
- ✅ Less boilerplate code
- ✅ More readable
- ✅ Python automatically handles `__aiter__` and `__anext__`
- ✅ Same functionality

**When to use async iterator class:**
- Need complex state management
- Want to implement additional methods
- Building a reusable library component

---

## Comparison: Sync vs Async Iteration

### Execution Flow

**Synchronous:**
```python
# Blocking - CPU waits for each step
for item in sync_source:
    process(item)  # Blocks until complete
    # Next iteration starts only after this finishes
```

**Asynchronous:**
```python
# Non-blocking - event loop can switch tasks
async for item in async_source:
    await process(item)  # Yields control, other tasks can run
    # Next iteration starts when data is ready
```

### Performance Example

```python
import asyncio
import time

# Synchronous version (slow)
def sync_fetch_all(urls):
    results = []
    for url in urls:
        time.sleep(0.5)  # Simulate network delay
        results.append(f"Data from {url}")
    return results

# Asynchronous version (fast)
async def async_fetch_all(urls):
    results = []
    async for url in async_url_source(urls):
        await asyncio.sleep(0.5)  # Non-blocking wait
        results.append(f"Data from {url}")
    return results
```

**Key difference:**
- Sync: Each iteration **blocks** - total time = sum of all waits
- Async: Each iteration **yields** - total time ≈ longest wait (if concurrent)

---

## Common Patterns and Examples

### Pattern 1: Reading Async Streams

```python
import asyncio

class AsyncLineReader:
    def __init__(self, stream):
        self.stream = stream
        self.buffer = ""
    
    def __aiter__(self):
        return self
    
    async def __anext__(self):
        while True:
            # Read chunk (non-blocking)
            chunk = await self.stream.read(1024)
            if not chunk:
                if self.buffer:
                    line = self.buffer
                    self.buffer = ""
                    return line
                raise StopAsyncIteration
            
            self.buffer += chunk.decode()
            
            # Check for complete lines
            if '\n' in self.buffer:
                lines = self.buffer.split('\n')
                self.buffer = lines[-1]  # Keep incomplete line
                return lines[0]

# Usage
async def read_log_file():
    async with aiofiles.open('app.log') as f:
        async for line in AsyncLineReader(f):
            print(f"Log: {line}")
```

### Pattern 2: WebSocket Message Iterator

```python
import websockets

async def websocket_messages(url):
    """Async generator for WebSocket messages"""
    async with websockets.connect(url) as ws:
        async for message in ws:
            yield message

# Usage
async def main():
    async for msg in websocket_messages("ws://example.com/stream"):
        print(f"Received: {msg}")
        # Process message while next one arrives
```

### Pattern 3: Concurrent Processing During Iteration

```python
import asyncio

async def process_items_concurrently():
    async def item_source():
        for i in range(10):
            await asyncio.sleep(0.1)  # Simulate data arrival
            yield i
    
    tasks = []
    async for item in item_source():
        # Process each item concurrently
        task = asyncio.create_task(process_item(item))
        tasks.append(task)
    
    # Wait for all processing to complete
    await asyncio.gather(*tasks)

async def process_item(item):
    await asyncio.sleep(0.5)  # Simulate processing
    print(f"Processed {item}")
```

---

## Summary Table

| Property | Synchronous Iterator | Asynchronous Iterator |
|----------|---------------------|----------------------|
| **Methods** | `__iter__()`, `__next__()` | `__aiter__()`, `__anext__()` |
| **End signal** | `StopIteration` | `StopAsyncIteration` |
| **Usage** | `for x in ...` | `async for x in ...` |
| **Next value** | `value = next(it)` | `value = await it.__anext__()` |
| **Blocking** | ✅ Yes (blocks CPU) | ❌ No (yields to event loop) |
| **Event loop** | Not required | Required |
| **Best for** | In-memory data | I/O operations, streams |
| **Examples** | `list`, `dict`, `range` | WebSocket, async generators, API pagination |
| **Concurrency** | ❌ No | ✅ Yes (enables concurrency) |
| **Return type** | Immediate value | Coroutine/awaitable |
| **Performance** | Fast for in-memory | Efficient for I/O-bound |

---

## Key Takeaways

1. **Synchronous iterators** (`for` loop):
   - Use for data already in memory
   - Block execution during iteration
   - Simple and fast for in-memory operations

2. **Asynchronous iterators** (`async for` loop):
   - Use for I/O-bound operations
   - Non-blocking - enables concurrency
   - Perfect for streams, APIs, WebSockets

3. **Prefer async generators** over async iterator classes when possible:
   - Less code, more readable
   - Same functionality

4. **Remember:** `async for` requires `await` internally - each iteration step yields control to the event loop, allowing other tasks to run.

5. **Common use cases:**
   - Paginated API responses
   - Reading large files in chunks
   - WebSocket message streams
   - Database query result streaming
   - Real-time data feeds

# Synchronous vs Asynchronous Context Managers

## Introduction

Context managers are a Python pattern for managing resources with a guaranteed setup and cleanup phase. They're essential for preventing resource leaks and ensuring proper cleanup, even when errors occur.

**Core concept:**
- **Setup** → Use resource → **Cleanup**
- Ensures cleanup always happens, even if an error occurs
- Reduces boilerplate code

---

## What Are Context Managers?

A context manager is an object that defines:
- **Setup phase** - initialization, opening resources
- **Cleanup phase** - closing resources, cleanup
- **Lifecycle** - wrapped around a block of code

### The Problem They Solve

**Without context managers:**
```python
# Manual resource management - error-prone!
file = open("data.txt")
try:
    data = file.read()
    process(data)
finally:
    file.close()  # Must remember to close!
```

**With context managers:**
```python
# Automatic cleanup - guaranteed!
with open("data.txt") as file:
    data = file.read()
    process(data)
# File automatically closed, even if error occurs
```

---

## Synchronous Context Managers

### How They Work

Synchronous context managers use two special methods:
- `__enter__()` - called when entering the `with` block (setup)
- `__exit__()` - called when exiting the `with` block (cleanup)

### Basic Usage

```python
with resource as r:
    # Use resource here
    pass
# Resource automatically cleaned up here
```

### What Happens Internally

```python
# This:
with resource as r:
    do_something()

# Is equivalent to:
r = resource.__enter__()
try:
    do_something()
finally:
    resource.__exit__(None, None, None)  # Always called!
```

### Custom Synchronous Context Manager

```python
class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None
    
    def __enter__(self):
        print(f"Opening {self.filename}")
        self.file = open(self.filename, self.mode)
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"Closing {self.filename}")
        if self.file:
            self.file.close()
        return False  # Don't suppress exceptions

# Usage
with FileManager("data.txt", "r") as f:
    content = f.read()
# File automatically closed, even if error occurs
```

### Common Synchronous Use Cases

- **Files** - `with open(...) as f:`
- **Database connections** - `with sqlite3.connect(...) as conn:`
- **Threading locks** - `with lock:`
- **Temporary changes** - `with tempfile.TemporaryDirectory() as tmpdir:`

---

## Asynchronous Context Managers

### How They Work

Asynchronous context managers use two async special methods:
- `async def __aenter__()` - called when entering the `async with` block (setup)
- `async def __aexit__()` - called when exiting the `async with` block (cleanup)

### Basic Usage

```python
async with resource as r:
    # Use resource here
    await do_something()
# Resource automatically cleaned up here
```

### What Happens Internally

```python
# This:
async with resource as r:
    await do_something()

# Is equivalent to:
r = await resource.__aenter__()
try:
    await do_something()
finally:
    await resource.__aexit__(None, None, None)  # Always awaited!
```

**Key difference:** Both `__aenter__` and `__aexit__` are coroutines and must be awaited!

### Custom Asynchronous Context Manager

```python
import asyncio

class AsyncDatabaseConnection:
    def __init__(self, connection_string):
        self.connection_string = connection_string
        self.conn = None
    
    async def __aenter__(self):
        print(f"Connecting to {self.connection_string}")
        await asyncio.sleep(0.5)  # Simulate async connection
        self.conn = {"status": "connected"}
        return self.conn
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        print("Closing connection")
        await asyncio.sleep(0.1)  # Simulate async cleanup
        self.conn = None
        return False  # Don't suppress exceptions

# Usage
async def main():
    async with AsyncDatabaseConnection("postgresql://...") as conn:
        print(f"Using connection: {conn}")
    # Connection automatically closed

asyncio.run(main())
```

---

## When to Use Async Context Managers

Use async context managers when **setup or cleanup involves I/O operations** that should be non-blocking.

### Common Async Use Cases

#### 1. Async Database Clients

```python
import asyncpg

async def main():
    # Connection setup/cleanup involves network I/O
    async with asyncpg.connect("postgresql://...") as conn:
        result = await conn.fetch("SELECT * FROM users")
        # Connection automatically closed
```

#### 2. Async HTTP Clients

```python
import httpx

async def main():
    # Client setup/cleanup involves network I/O
    async with httpx.AsyncClient() as client:
        response = await client.get("https://api.example.com")
        # Client automatically closed
```

#### 3. WebSocket Connections

```python
import websockets

async def main():
    # Connection setup/cleanup involves network I/O
    async with websockets.connect("ws://example.com") as ws:
        await ws.send("Hello")
        message = await ws.recv()
        # WebSocket automatically closed
```

#### 4. Streaming Responses

```python
import httpx

async def main():
    async with httpx.AsyncClient() as client:
        async with client.stream("GET", "https://api.example.com/stream") as response:
            async for chunk in response.aiter_bytes():
                process(chunk)
            # Stream automatically closed
```

#### 5. Asyncio Locks

```python
import asyncio

lock = asyncio.Lock()

async def main():
    # Lock acquisition/release involves event loop coordination
    async with lock:
        # Critical section
        await do_something()
    # Lock automatically released
```

---

## Why Async Context Managers Matter

### 1. Non-Blocking Operations

**Without async context manager (blocking):**
```python
# This would block the event loop!
conn = await asyncpg.connect()  # Setup
try:
    await conn.execute("SELECT ...")
finally:
    await conn.close()  # Cleanup - but if this blocks, everything stops
```

**With async context manager (non-blocking):**
```python
# Cleanup is also async and non-blocking
async with asyncpg.connect() as conn:
    await conn.execute("SELECT ...")
# Cleanup happens asynchronously, doesn't block event loop
```

### 2. Guaranteed Cleanup

Even if an error occurs, cleanup always happens:

```python
async def main():
    async with asyncpg.connect(...) as conn:
        await conn.execute("SELECT ...")
        raise ValueError("Something went wrong!")
    # Connection STILL closed, even though error occurred
```

### 3. Prevents Resource Leaks

```python
# BAD - connection might leak if error occurs
async def bad_example():
    conn = await asyncpg.connect(...)
    await conn.execute("SELECT ...")
    await conn.close()  # What if error happens before this?

# GOOD - connection always closed
async def good_example():
    async with asyncpg.connect(...) as conn:
        await conn.execute("SELECT ...")
    # Always closed, even on error
```

### 4. Reduces Boilerplate

**Without context manager:**
```python
conn = await asyncpg.connect()
try:
    await conn.execute("SELECT ...")
finally:
    await conn.close()
```

**With context manager:**
```python
async with asyncpg.connect() as conn:
    await conn.execute("SELECT ...")
# Much cleaner!
```

---

## Creating Async Context Managers with `@asynccontextmanager`

The `@asynccontextmanager` decorator from `contextlib` lets you create async context managers using a simple async generator function, without defining a class.

### Basic Syntax

```python
from contextlib import asynccontextmanager

@asynccontextmanager
async def my_context_manager():
    # Setup code (before yield)
    resource = await setup_resource()
    try:
        yield resource  # This is what gets assigned to 'as' variable
    finally:
        # Cleanup code (after yield)
        await cleanup_resource(resource)
```

### Complete Example

```python
from contextlib import asynccontextmanager
import asyncio

@asynccontextmanager
async def database_connection(connection_string):
    """Async context manager using decorator"""
    print(f"Connecting to {connection_string}")
    await asyncio.sleep(0.5)  # Simulate async connection
    
    conn = {"status": "connected", "db": "postgres"}
    
    try:
        yield conn  # This is returned to 'as conn'
    finally:
        print("Closing connection")
        await asyncio.sleep(0.1)  # Simulate async cleanup
        conn["status"] = "closed"

async def main():
    async with database_connection("postgresql://localhost/db") as conn:
        print(f"Using connection: {conn}")
        await asyncio.sleep(1)  # Simulate work
    # Connection automatically closed

asyncio.run(main())
```

**Output:**
```
Connecting to postgresql://localhost/db
Using connection: {'status': 'connected', 'db': 'postgres'}
Closing connection
```

### When to Use `@asynccontextmanager`

**Use the decorator when:**
- You have simple setup/cleanup logic
- You don't need complex state management
- You want less boilerplate than a class

**Use a class when:**
- You need complex state management
- You want to add additional methods
- You're building a reusable library component

---

## Comparison: Sync vs Async Context Managers

### Synchronous Context Manager

```python
# Sync - blocks during setup/cleanup
with open("file.txt") as f:
    data = f.read()  # Blocking I/O
```

**Characteristics:**
- Uses `__enter__()` and `__exit__()`
- Setup/cleanup are synchronous (blocking)
- Suitable for CPU-bound or simple I/O operations
- Used with `with` statement

### Asynchronous Context Manager

```python
# Async - non-blocking during setup/cleanup
async with httpx.AsyncClient() as client:
    response = await client.get("https://api.com")  # Non-blocking I/O
```

**Characteristics:**
- Uses `async def __aenter__()` and `async def __aexit__()`
- Setup/cleanup are asynchronous (non-blocking)
- Suitable for I/O-bound operations
- Used with `async with` statement
- Must be used inside async functions

### When to Use Which?

| Use Case | Type | Example |
|----------|------|---------|
| Files | Sync | `with open(...) as f:` |
| Classic DB (sqlite3, psycopg2) | Sync | `with sqlite3.connect(...) as conn:` |
| Threading locks | Sync | `with threading.Lock():` |
| Async DB (asyncpg, motor) | Async | `async with asyncpg.connect(...) as conn:` |
| HTTP clients (httpx) | Async | `async with httpx.AsyncClient() as client:` |
| WebSockets | Async | `async with websockets.connect(...) as ws:` |
| Asyncio locks | Async | `async with asyncio.Lock():` |
| Streaming responses | Async | `async with client.stream(...) as resp:` |

---

## Key Principles

1. **Setup → Work → Cleanup** is the core pattern
   - Setup happens before the block
   - Work happens inside the block
   - Cleanup always happens after the block (even on errors)

2. **If setup/cleanup requires `await` → use async context manager**
   - Sync context managers block the event loop
   - Async context managers yield control to the event loop

3. **Don't mix sync and async patterns**
   - Don't use `with` for async resources
   - Don't use `async with` for sync resources

4. **Cleanup is always guaranteed**
   - Even if exceptions occur
   - Even if you return early
   - The `finally` block ensures cleanup

5. **Async context managers protect the event loop**
   - Setup/cleanup operations are non-blocking
   - Other tasks can run during I/O operations

---

## Summary

- **Context managers** control resource lifecycle with guaranteed setup and cleanup
- **Synchronous** context managers use `__enter__()` / `__exit__()` and `with` statement
- **Asynchronous** context managers use `async def __aenter__()` / `async def __aexit__()` and `async with` statement
- **Use async context managers** for async DB clients, HTTP clients, WebSockets, streaming, and asyncio locks
- **`@asynccontextmanager`** simplifies writing async context managers using async generators
- **Benefits**: Prevents resource leaks, ensures cleanup, keeps event loop responsive, reduces boilerplate


# Sync vs Async Generators — Complete Comparison

## 1) Synchronous Generator (`def ... yield`)

### What It Is
- Function containing `yield`.
- Produces a **generator** object.
- Returns values lazily, one at a time.
- Execution pauses at `yield` but stays in the same thread.
- `next()` resumes immediately — no event loop, no waiting.

### Uses
- Lazy evaluation.
- Streaming large datasets.
- Low memory consumption.
- Building custom iterators.
- Reading files line-by-line.
- Logical pause points during generation.

### Limitations
- Blocking: if generator performs blocking I/O → entire thread is blocked.
- Cannot use `await`.
- Not event-loop compatible.

---

## 2) Asynchronous Generator (`async def ... yield`)
### What It Is
- `async def` function containing `yield`.
- Produces an **async generator** object.
- Consumed via `async for`, not `for`.
- Allows `await` between yields.

### Uses
- Streaming data that arrives asynchronously:
  - WebSocket messages
  - HTTP streaming responses
  - Chunked downloads/uploads
  - Async DB queries
  - Kafka consumers in async mode

### Advantages
- Non-blocking waiting (`await` inside generator).
- Event loop can run other tasks during pauses.
- Ideal for real-time streaming.
- Great for I/O-bound asynchronous sequences.

### Limitations
- Must use `async for`.
- Requires running event loop.
- Cannot be iterated synchronously.

---

## 3) Side-by-Side Comparison Table

| Property | Synchronous Generator | Asynchronous Generator |
|----------|----------------------|----------------------|
| **Definition** | `def` + `yield` | `async def` + `yield` |
| **Iteration** | `for` | `async for` |
| **Pause mechanism** | `yield` | `yield` + `await` |
| **Blocking** | ✅ Yes (blocks thread) | ❌ No (yields to event loop) |
| **I/O operations** | Blocking | Non-blocking (with `await`) |
| **Data streaming** | ✅ Yes | ✅ Yes (async) |
| **Typical use** | Files, large collections | WebSocket, HTTP streams, DB, Kafka |
| **Event loop** | Not required | Required |
| **Return type** | `Generator` | `AsyncGenerator` |

---

## 4) Two Parallel Examples

### Sync Generator
```python
def read_lines_sync(file):
    """Synchronous generator - blocks during I/O"""
    for line in file:
        yield line  # Blocking I/O - thread waits
```

**Usage:**
```python
with open("data.txt") as f:
    for line in read_lines_sync(f):
        print(line)  # Blocks until line is read
```

### Async Generator
```python
async def read_lines_async(stream):
    """Asynchronous generator - non-blocking I/O"""
    async for line in stream:
        yield line  # Awaits internally, non-blocking
```

**Usage:**
```python
async def main():
    async with aiofiles.open("data.txt") as f:
        async for line in read_lines_async(f):
            print(line)  # Doesn't block - other tasks can run
```

### Difference During “Waiting”
- **Sync**: waiting blocks CPU → nothing else runs.
- **Async**: waiting via `await` frees event loop → other tasks run concurrently.

---

## 5) Essential One-Sentence Summary
__SYNC:__ `yield` streams data lazily but blocks execution.  
__ASYNC:__ `yield` still streams data, but the power is in combining it with `await`, enabling fully non-blocking asynchronous data streams handled by the event loop.

# Sync vs Async Comprehensions — Complete Model

## 1) What Is a Comprehension?
- Syntactic sugar for creating collections in one line.
- Sync world types:
  - list comprehension
  - set comprehension
  - dict comprehension
  - generator expression

**Example:**
```python
names = ["A", "B", "C"]
upper = [n.upper() for n in names]
```

**Equivalent to:**
```python
upper = []
for n in names:
    upper.append(n.upper())
```

---

## 2) Sync Comprehensions

### List Comprehension
```python
[x * 2 for x in numbers]
```

### Set Comprehension
```python
{x * 2 for x in numbers}
```

### Dict Comprehension
```python
{k: v.upper() for k, v in mapping.items()}
```

### Generator Expression
```python
(x * 2 for x in numbers)
```

**Characteristics:**
- Synchronous
- No `await` support
- Cannot consume async iterators
- No yielding to event loop  

---

## 3) Async Comprehensions

Two async constructs:

### A) Async List Comprehension
```python
results = [item async for item in async_generator()]
```

### B) Async Generator Expression
```python
gen = (item async for item in async_generator())
```

**Inside async comprehension you may use:**
- `async for` - iterate over async iterators
- `await` inside expression - await async operations

**Examples:**
```python
# Basic async list comprehension
[x async for x in my_async_gen()]

# With condition
[x.url async for x in my_async_gen() if x.status == 200]
```

---

## 4) When To Use Async Comprehension
Use when iterable is asynchronous AND you want:
- list creation
- filtering
- mapping / transforming
- extracting attributes

Common cases:
- downloading items from async API
- streaming chunks
- iterating async generators
- async ETL pipelines
- streaming parse

---

## 5) Why Async Comprehension Exists
Because async world uses:
- async iterators (`__aiter__`)
- async generators (`async def ... yield`)

Regular comprehension cannot work with:
- `await`
- `async for`

Async comprehension provides the async equivalent.

---

## 6) Rewrite Example Using Async Comprehension

**Async generator:**
```python
async def download(urls):
    for url in urls:
        await asyncio.sleep(1)  # Simulate async I/O
        response = {"status": 200, "url": url}
        yield response
```

### Using `async for` iteration
```python
async def iterate():
    urls = ["https://example.com", "https://example.org", "https://example.net"]
    async for response in download(urls):
        print(response)
```

### Using async list comprehension (more concise)
```python
async def iterate():
    urls = ["https://example.com", "https://example.org", "https://example.net"]
    responses = [resp async for resp in download(urls)]
    print(responses)
```

**Output:**
```
[
    {'status': 200, 'url': 'https://example.com'},
    {'status': 200, 'url': 'https://example.org'},
    {'status': 200, 'url': 'https://example.net'}
]
```

### With condition
```python
valid = [resp async for resp in download(urls) if resp["status"] == 200]
```

---

## 7) Example With `await` Inside Async Comprehension

**Incorrect (sync comprehension → cannot use await):**
```python
contents = [await get_content(u) for u in urls]   # ❌ SyntaxError!
```

**Correct (async comprehension):**
```python
async def async_iter(urls):
    for u in urls:
        yield u

contents = [await get_content(u) async for u in async_iter(urls)]
```

---

## 8) Strict Rules
❌ Cannot use `await` in a sync comprehension.  
❌ Cannot use `async for` on a sync iterable.  
✔ Must use async comprehension for async iterators.  

---

## 9) Comparison Table

| Type | Syntax | Iterates Over | Supports `await`? | Blocking? | When to Use |
|-----|--------|--------------|-------------------|----------|------------|
| Sync list comprehension | `[x for x in it]` | Sync iterator | ❌ No | ✅ Yes | In-memory data transformation |
| Sync generator expr | `(x for x in it)` | Sync iterator | ❌ No | ✅ Yes | Lazy evaluation |
| Async list comprehension | `[x async for x in it]` | Async iterator | ✅ Yes | ❌ No | Async streaming |
| Async generator expr | `(x async for x in it)` | Async iterator | ✅ Yes | ❌ No | Lazy async stream |

---


## 10) Summary

**Synchronous comprehension:**
- Create a collection from values that are immediately available
- Use for in-memory data processing
- Simple and fast for synchronous operations

**Asynchronous comprehension:**
- Create a collection from values that arrive gradually asynchronously via `await`
- Use for async iterators, async generators, streaming data
- Non-blocking - enables concurrency during collection building
