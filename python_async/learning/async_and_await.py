# Import the asyncio library for asynchronous programming
import asyncio
# Import random module to simulate variable cooking times
import random

from contextlib import asynccontextmanager

# Simple async function demonstrating basic async/await pattern
async def main():
    """
    A basic asynchronous function that demonstrates the fundamental
    async/await pattern with a simple greeting and delay.
    """
    print("Hello")
    # await pauses execution for 1 second without blocking other tasks
    await asyncio.sleep(1)
    print("World")

class EggBoiler:
    """
    An asynchronous iterator class that simulates boiling eggs.
    
    This class demonstrates how to implement an async iterator using
    __aiter__ and __anext__ methods, allowing it to be used with
    'async for' loops.
    """
    
    def __init__(self, amount):
        """
        Initialize the EggBoiler with a specified number of eggs.
        
        Args:
            amount (int): The number of eggs to boil
        """
        # Create an iterator for egg numbers (1, 2, 3, ..., amount)
        self.eggs = iter(range(1, amount + 1))

    def __aiter__(self):
        """
        Return the async iterator object (self).
        
        This method is required for async iteration protocol.
        It's called when starting an 'async for' loop.
        """
        return self

    async def __anext__(self):
        """
        Return the next item in the async iteration.
        
        This method is called for each iteration of 'async for'.
        It must be an async method and should raise StopAsyncIteration
        when there are no more items to iterate over.
        
        Returns:
            Coroutine: A coroutine representing the boiling process
        
        Raises:
            StopAsyncIteration: When all eggs have been processed
        """
        try:
            # Get the next egg number from the iterator
            egg = next(self.eggs)
        except StopIteration:
            # When iterator is exhausted, raise StopAsyncIteration to end async iteration
            raise StopAsyncIteration
        # Return the coroutine for boiling this egg
        return self.boil(egg)
    
    async def boil(self, egg):
        """
        Simulate the asynchronous process of boiling an egg.
        
        This method simulates a real-world async operation that takes
        variable time to complete (like I/O operations, network requests, etc.)
        
        Args:
            egg (int): The egg number being boiled
            
        Returns:
            int: The egg number after boiling is complete
        """
        print(f"Boiling egg {egg}...")
        # Simulate variable boiling time (1-5 seconds)
        # This represents async I/O that doesn't block other operations
        await asyncio.sleep(random.randint(1, 5))
        print(f"Egg {egg} is boiled!")
        return egg


async def loop():
    """
    Main async function that demonstrates async iteration and gathering results.
    
    This function shows how to:
    1. Use async for loops with custom async iterators
    2. Collect coroutines for later execution
    3. Use asyncio.gather() to run multiple coroutines concurrently
    """
    # List to store the coroutines returned by the async iterator
    eggs = []
    
    # Async for loop - iterates through the EggBoiler async iterator
    # Each iteration gets a coroutine representing the boiling process
    async for egg in EggBoiler(4):
        eggs.append(egg)
    
    print("All eggs are boiled!")
    
    # asyncio.gather() runs all coroutines concurrently and waits for completion
    # The * operator unpacks the list of coroutines as separate arguments
    await asyncio.gather(*eggs)



@asynccontextmanager
async def connection():
    print("setting up connection")
    await asyncio.sleep(1)
    yield {"driver": "sqlite"}
    await asyncio.sleep(1)
    print("closing connection")

async def connection_example():
    async with connection() as conn:
        print(conn, "is ready to use")



async def download(urls):
    for url in urls:
        await asyncio.sleep(1)
        response = {'status': 200, 'url': url}
        yield response

async def iterate():
    urls = ["https://example.com", "https://example.org", "https://example.net"]
    async for response in download(urls):
        print(response)




# Standard Python idiom to run the script directly (not when imported)
if __name__ == "__main__":
    # Run the async event loop with our main coroutine
    # asyncio.run() is the recommended way to run async programs in Python 3.7+
    asyncio.run(iterate())