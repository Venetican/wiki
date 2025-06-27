# Introduction & First Autonomous Agent

## Meet Your Instructor

- Ed Donner  
  - Two-time AI startup co-founder  
  - Former Managing Director at J.P. Morgan  
  - Guiding this 6-week Agentic AI journey

8 projects ready to amaze you!

## Quick Start with N810

- **N810**: A low-code/no-code workflow tool with built-in generative AI
- Use it in the cloud or download it locally
- Steps:  
  Visit N810  
  Click *Get Started*  
  Create an account and sign in

Tip: Try it yourself to follow along interactively!

## Build Your First Workflow

### Add a Chat Message

- From the canvas, add a chat message block  
- This appears as a chat window for user input

### Add an AI Agent

- Click ➕ → choose *Advanced AI*  
- Connect the chat message to the AI agent block

### Add a Chat Model

- Attach a large language model (LLM) to the AI agent
- Example: *OpenAI Chat Model*
- To connect:
  - Create new credential
  - Add your API key

```python
# Example: Create credential in N810
# (pseudo representation)
OpenAI_API_Key = "your_openai_api_key"
```
### Add a Tool

- Click ➕ → browse tools
- Example: *Philips Hue* light control
- Configure fields:
  - Brightness
  - Hue (color)

## Test Your Agent

1. Return to the canvas
2. Start the chat: *"Hi there"*
3. Try: *"Please turn the lights on, bright white"*
4. Watch your lights react!

## Note on Autonomy

- Simple example shows the agent acting on instructions
- To add autonomy: instruct the agent to choose between options (e.g., red or blue) and watch it decide!

## Hands-On Tip

- Experiment with other tools (calendar, emails, social feeds)
- Build your confidence with live testing

## Next

- This is the only low-code tool we’ll use.
- From next week: fully custom coded agents and orchestrations!

See you in the next lesson!

# Course Overview & Curriculum

## What You'll Learn

You’ll master **three core areas**:
- **Theory:** Understand what agents are and how agentic architectures work.
- **Frameworks:** Work with real platforms to build and deploy agents.
- **Projects:** Get hands-on with practical, fun, and commercial applications.

The course is structured into **6 modules (weeks)** — progress step-by-step or at your own pace.

## Weekly Breakdown

- **Week 1: Foundations**  
  Core principles, LLM interactions, build an agentic solution without a framework.  
  *Project:* Personal career Q&A agent (your interactive resume).

- **Week 2: OpenAI Agents SDK**  
  Simple, flexible framework, guardrails, first structured agent builds.  
  *Project:* Deep research app.

- **Week 3: Crew**  
  Fan-favorite framework, low-code configuration, define a crew of agents.  
   *Projects:* Multiple Crew-based builds.

- **Week 4: LangGraph**  
  Sophisticated, complex, full-code workflows, deep control.

- **Week 5: Microsoft Autogen**  
  Multi-agent collaboration remotely, orchestration patterns.

- **Week 6: MCP & Capstone**  
  Model Context Protocol (Anthropic) for open-source agent collaboration.  
  *Capstone:* Combine everything into a real-world financial trading simulation (illustrative only!).

Each week = 5 days of lectures/projects → weekends off!

## Highlight Projects (5–8)

- **Engineering Team Agent:** Simulate a software team — frontend, backend, lead, tester — building software collaboratively.
- **Sidekick:** An agent that opens a browser and interacts live — your AI partner.
- **Creator:** An agentic framework that generates new agents to tackle commercial tasks.
- **Capstone:** Financial markets trading simulator — agents research, read filings, make buy/sell decisions, and manage a virtual portfolio.

## Designed for Real Skills

- Combine theory + frameworks + hands-on builds.
- Gain practical skills you can apply immediately.
- See clear commercial use cases for B2B and B2C.

# Course Introduction, Expectations & Setup Guide

## Who This Course Is For

This course is designed to suit a **wide range of learners**:
- Absolute beginners with no coding experience  
- Intermediate Python developers and AI engineers  
- Experienced agent engineers wanting advanced material and challenging projects

If you’re brand new to coding:  
- Be patient — it will be challenging but achievable.
- Use the **guides folder** in the repo to build up your foundational skills step by step.

If you’re an experienced developer or have taken the **LLM Engineering course**:  
- You’ll find advanced content and meaningful projects.
- Some parts may feel basic — feel free to skim and focus on the complex builds.

---

## ⚙️ Course Resources

Resources to help you succeed:
- **Guides**: Practical walkthroughs to build up basics and solve common issues.
- **Labs**: Continuously updated — use `git pull` regularly to get the latest content.
- **YouTube videos**: Additional deep dives on tricky topics.
- **Troubleshooting docs**: Quick fixes for common environment/setup issues.

---

## Environment Setup

**Tools we’ll use:**
- **Cursor**: AI-powered IDE built on VSCode — makes coding productive and fun.
- **UV**: A fast, Rust-based virtual environment manager, an alternative to Anaconda.  
  - Lightweight, modern, and widely adopted in agent frameworks.
  - Easy to use and reliable for managing Python environments.

 Note: You might be familiar with Anaconda — UV is faster and simpler. You'll thank me later!

---

## About API Costs

 This course involves calling **frontier LLMs** (like OpenAI, DeepSeek, Gemini):
- You can run some models **locally for free** (e.g., Llama open-source models).
- Using top-tier APIs may cost a few dollars — I spent **under $5 for the whole course**.
- **OpenAI** usually requires a $5 minimum deposit.
- **DeepSeek** and **Gemini** offer cheaper or free tiers — Gemini has a free tier for now.

Running advanced LLMs involves huge compute costs. API fees cover this infrastructure — a fraction of what you’d pay for equivalent local hardware.

---

## Key Takeaways About Costs

You have **flexibility**:
- Run cheap/free local models.
- Or pay small API costs for best results.
- Mix both approaches as needed.

---

## Stay Connected & Share Progress

**Reach out anytime:**
- Email me — I reply fast (unless I’m asleep or traveling!).
- Connect with me on **LinkedIn** — I love to build a supportive community.

**Post your projects** on LinkedIn and tag me:
- I’ll amplify and comment, giving exposure to your work.
- Great for networking and showcasing your skills to potential employers and clients.

---

# 1️⃣ PC Environment Setup Guide

## Overview

This guide covers setting up your local development environment on Windows. There are five main steps plus an optional sixth. Everything is supported by detailed instructions in the course repository and its README.

---

## Step 1: Clone the Repository

1. Open PowerShell.
2. Check if Git is installed:

```bash
git --version
```

3. If Git is missing, download and install it from Git’s website.
4. Create a `projects` directory in your home folder if you don’t have one:

```bash
mkdir projects
```

5. Navigate into the `projects` directory:

```bash
cd projects
```

6. Copy the repository URL from GitHub (green "Code" button, HTTPS option).
7. Clone the repo:

```bash
git clone [YOUR_REPO_URL]
```

8. Confirm the folder appears:

```bash
cd agents
```

This `agents` folder is your project root.

---

## Step 2: Install and Open Cursor IDE

1. Download Cursor from its official site.
2. Run the installer, accept the license, and choose an install location.
3. Allow changes to the PATH.
4. After installation, launch Cursor.
5. Sign up for a free Cursor account.
6. Open the project:  
   - File > Open Project > navigate to your `projects/agents` folder.

---

## Step 3: Install UV and Sync Environment

1. Open a new PowerShell window.
2. Install UV using the Windows instructions from UV’s site or the setup guide:

```bash
[Run the copied UV install command]
```

3. After installing UV, restart your PowerShell:

```bash
exit
```

Then open a fresh PowerShell and verify:

```bash
uv --version
```

4. In Cursor, open the integrated terminal (View > Terminal or Ctrl + `).
5. Run:

```bash
uv sync
```

UV will:
- Install the specified Python version.
- Build a virtual environment.
- Install all required packages.

Check the `.venv` folder — this confirms the environment is ready.

---

## Step 4: Get Your OpenAI API Key

1. Log in to the OpenAI Developer Platform.
2. If required, add a payment method and top up at least $5.
3. Go to **API keys** section.
4. Click **Create new secret key**, name it, and copy it immediately.

Important:
- Do not paste your key into word processors that may change formatting.
- Store it safely.

---

## Step 5: Create a `.env` File

1. In Cursor, right-click the project root and select **New File**.
2. Name it exactly `.env` (with a dot at the beginning).
3. Add your API key like this:

```bash
OPENAI_API_KEY=your_real_key_here
```

4. If using other providers (DeepSeek, Grok, OpenRouter), add them similarly:

```bash
DEEPSEEK_API_KEY=your_deepseek_key_here
```

This keeps your secrets private and out of source control.

---

## Step 6 (Optional): Troubleshooting and Tips

- Read the **Gotchas** section in the Windows setup guide.
  - Example: Windows path length limits.
  - Antivirus conflicts.

- Use the guides and troubleshooting docs in the repo.

---

## Summary

You have:
- Cloned the repository.
- Installed and opened Cursor.
- Installed UV and synced dependencies.
- Secured your API keys in a `.env` file.

Skip the Mac setup video and move to the next lesson. Your environment is ready for action.

# 2️⃣ First Lab: Running the Project and Your First Agentic Pattern

## Getting Started

Your environment is now set up. Make sure Cursor IDE is open, clean, and shows your project directories on the left. Open `1_foundations` and click on `lab1`.

This lab includes:
- Setup checks
- Helpful guides for Python beginners and intermediate learners
- A troubleshooting guide for common issues

Read the README and guides as needed. Labs are kept up to date with new info as students run into issues, so expect small differences compared to the video.

---

## How to Work with Labs

- Watch the video walkthrough first.
- Afterwards, repeat the lab step-by-step yourself.
- Add `print` statements, experiment, and get comfortable with the code.
- Notebooks are used here — they allow you to run Python step by step in *cells*.
- If you prefer scripts, don’t worry — we will use plain `.py` files later too.

---

## Select the Python Environment

1. In the notebook, click **Select Kernel** (top right).
2. Choose the recommended Python environment: look for your `.venv` with Python 3.12.

Repeat this when opening a new lab notebook.

---

## Load Environment Variables

1. In the first cell, run:

```python
from dotenv import load_dotenv
```

2. Next, run:

```python
load_dotenv(override=True)
```

This ensures `.env` variables (like your API key) override any existing global environment settings.

3. Verify it:

```python
import os

if os.getenv("OPENAI_API_KEY"):
    print("API key exists:", os.getenv("OPENAI_API_KEY")[:8])
else:
    print("API key not set. Check troubleshooting guide.")
```

---

## Test the OpenAI Client

1. Import and instantiate the OpenAI client:

```python
from openai import OpenAI

OpenAI_client = OpenAI()
```

This client is a lightweight wrapper to connect to OpenAI’s cloud APIs — it does not run a local LLM.

---

## Make a Simple Chat Request

1. Create a basic messages list:

```python
messages = [
    {"role": "user", "content": "What is 2 plus 2?"}
]
```

2. Call the chat completion API:

```python
response = OpenAI_client.chat.completions.create(
    model="gpt-4o-mini",
    messages=messages
)

print(response.choices[0].message.content)
```

You should see a valid answer from OpenAI (e.g., "2 plus 2 equals 4").

---

## Build a Mini Agentic Pattern

Next, make multiple calls in sequence — this demonstrates chaining LLM calls to solve a larger task.

1. Ask for a challenging IQ question:

```python
question_prompt = [
    {"role": "user", "content": "Propose a hard, challenging question to assess someone's IQ. Respond only with the question."}
]

response = OpenAI_client.chat.completions.create(
    model="gpt-4o-mini",
    messages=question_prompt
)

question = response.choices[0].message.content
print("Question:", question)
```

2. Ask OpenAI to answer the question:

```python
answer_prompt = [
    {"role": "user", "content": question}
]

response = OpenAI_client.chat.completions.create(
    model="gpt-4o-mini",
    messages=answer_prompt
)

answer = response.choices[0].message.content
print("Answer:", answer)
```

Optionally, display it nicely:

```python
from IPython.display import Markdown, display

display(Markdown(answer))
```

---

## Exercise: Apply to a Business Scenario

In the final cell, build a 3-step agentic workflow:
1. Ask for a promising business area for AI.
2. Ask for a specific pain point in that sector.
3. Ask for an AI solution to solve that pain point.

Use three calls to the chat completions API. Print each step clearly, optionally with Markdown.

---

## Final Tips

- If you hit any issues, use the troubleshooting guide.
- Reach out for help anytime.
- Post your project results on LinkedIn if you want to share ideas.

This lab shows how to orchestrate multiple LLM calls — a key pattern for building more complex agent workflows later.

You’re ready to move on!

# 3️⃣ Theory Day: Understanding Agents and Agentic Architecture

## Introduction

Welcome to Day Two. Today is a **theory-focused day** — one of the rare ones in this six-week program.  
We will explore **Agentic AI**, its definitions, key concepts, and a useful framework to think about how agents work in practice.

---

## What is an Agent?

There isn’t a universally agreed definition, but a simple and practical one comes from Hugging Face:

> **"AI agents are programs where LLM outputs control the workflow."**

In other words:  
An LLM’s output decides *what* tasks to do and *in which order*.  

This captures the core idea of giving the LLM a level of **control**.

---

## Common Hallmarks of Agentic AI

People often label an AI system as *agentic* if it shows any of these traits:

1. **Multiple LLM calls** — e.g., chaining prompts and responses.
   - Example: The mini project from Day One.
2. **Tool use** — LLM can trigger external actions (like turning on lights, calling an API).
3. **Communication between models** — An orchestrated environment where multiple LLMs share info.
4. **A planner** — A dedicated process (sometimes another LLM) that coordinates the workflow.
5. **Autonomy** — The LLM has freedom to decide what to do next (a "choose-your-own-adventure" logic).

The last point — autonomy — is often seen as the core spirit of an agent: the model influences what happens next.

---

## Autonomy in Practice

Autonomy may sound dramatic: "an LLM with free will".  
But practically, it just means you let the model decide:

- Which tools to use.
- What sequence of tasks to run.
- How to react to new input.

For example:
- Day One’s exercise, where the LLM picked a business sector and pain point, shows basic autonomy.
- Asking an LLM to write a question *and then answer it* is a simple autonomous pattern.

---

## Two Categories: Workflows vs. Agents

**Anthropic**, in their blog *Building Effective Agents*, offers a clear split:

| Category | Description |
|----------|--------------|
| **Workflows** | Models + tools orchestrated through **predefined paths**. Steps are fixed; the model follows a script. |
| **Agents** | Models **dynamically** decide their own path. The system is flexible and self-directs how tasks get done. |

This means:
- Many systems called *agents* are technically just **workflows**.
- True *agents* have logic to plan, adapt, and choose actions dynamically.

Both fall under the broader label **Agentic Systems**.

---

## Why This Matters

Understanding the difference helps you:
- Design better solutions.
- Know when you’re building a simple multi-step workflow vs. a flexible agent.
- Decide which tools and frameworks fit your goals.

---

## Next Steps

In the next parts:
- We’ll break down **common design patterns** for workflows and agents.
- You’ll see how to build them step-by-step.
- And you’ll learn when to apply each idea in real projects.

Keep this mental model in mind:
**Workflows = scripted orchestration**  
**Agents = dynamic, LLM-directed orchestration**

---

## Summary

- **Agentic AI** means giving LLMs some control over *what* happens and *when*.
- Multiple LLM calls, tool use, and autonomy are key features.
- Workflows and agents are related but differ in flexibility.
- You already used agentic ideas in Day One’s exercise.

Ready to see these patterns in action? Let’s dive deeper in the upcoming lessons.

# 4️⃣ Agentic Workflows: Five Common Design Patterns with Schematics

## Overview

Anthropic describes **five core design patterns** for building **Agentic Workflows**.  
These patterns help you organize and control multiple LLM calls and tool interactions in a clear, reusable way.

Below are concise explanations and **conceptual schematics** for each pattern.

---

## 1) Prompt Chaining

**Description:**  
Break down a complex task into **sequential LLM calls**, possibly interleaved with your own code.

- Each LLM call handles a well-defined subtask.
- Ensures focused prompts and clearer outputs.
- Keeps the workflow on tight guardrails.

**Example:**  
Ask an LLM to pick a business sector → pass it to another LLM to find a pain point → pass it to a third LLM to propose a solution.

**Schematic:**

```
[Input] ──► [LLM 1] ──► [Code (optional)] ──► [LLM 2] ──► [Code (optional)] ──► [LLM 3] ──► [Output]
```

---

## 2) Routing

**Description:**  
Use an **LLM router** to decide *which* specialized model to call for a given input.

- Good for workflows with multiple domain-specific LLMs.
- The router classifies the task and dispatches it to the right expert.

**Schematic:**

```
[Input] ──► [LLM Router]
                     │
        ┌────────────┼────────────┐
     [LLM 1]      [LLM 2]      [LLM 3]
        │             │             │
   [Output 1]    [Output 2]    [Output 3]
```

---

## 3) Parallelization

**Description:**  
Run **multiple LLM calls concurrently** to handle independent subtasks or to cross-check results.

- Orchestration logic (your own code) splits the task.
- Results are aggregated at the end.

**Schematic:**

```
[Input]
   │
[Code: Split Task]
   │
 ┌─┴─────────────┐
[LLM 1]  [LLM 2]  [LLM 3] (run in parallel)
 └─┬─────────────┘
   │
[Code: Aggregate Results]
   │
[Output]
```

---

## 4) Orchestrator-Worker

**Description:**  
Similar to Parallelization but *more dynamic* — an **LLM orchestrator** decides how to decompose the task and merge the results.

- More flexible: the orchestrator can adapt its plan.
- More autonomy than purely static parallelization.

**Schematic:**

```
[Input]
   │
[LLM Orchestrator: Plan & Decompose]
   │
 ┌─┴─────────────┐
[LLM Worker 1] [LLM Worker 2] [LLM Worker 3]
 └─┬─────────────┘
   │
[LLM Orchestrator: Merge & Synthesize]
   │
[Output]
```

---

## 5) Evaluator-Optimizer (Validation Loop)

**Description:**  
Use one LLM to **generate** solutions and a second LLM to **validate** them. If rejected, the generator retries, possibly with feedback.

- Boosts accuracy and trust in outputs.
- Adds a feedback loop for self-correction.

**Schematic:**

```
[Input]
   │
[LLM Generator]
   │
[LLM Evaluator]
   │
 ┌─────────────Yes─────────────┐
 │                             │
[Output]                  No / Feedback
                               │
                      [LLM Generator: Retry]
                               │
                        (Loop back to Evaluator)
```

---

## Summary Table

| Pattern | Key Use | Control |
|---------|----------|---------|
| **Prompt Chaining** | Clear steps, precise tasks | Fixed sequence |
| **Routing** | Task selection | Selects specialized model |
| **Parallelization** | Concurrent tasks | Fixed plan, run in parallel |
| **Orchestrator-Worker** | Dynamic task breakdown | LLM decides sub-tasks |
| **Evaluator-Optimizer** | Validation & retry | Adds QA loop |

---

## Takeaway

These patterns:
- Help you **structure** complex agentic systems.
- Balance **control** (guardrails) and **flexibility** (autonomy).
- Can be combined to fit real-world scenarios.

Next, we’ll explore **true agent patterns**, where the system makes high-level choices on its own.

# 5️⃣ Agent Patterns: Flexible, Open-Ended Agentic Systems

## Overview

After structured **workflow patterns**, we move to **agent patterns** — the **second category** of agentic systems.

These are **dynamic**, **self-directed** patterns where the LLM has the autonomy to:
- **Decide the task flow**
- **Choose actions**
- **Interact with an environment**
- **React to feedback**
- **Repeat until done**

---

## Key Difference vs. Workflows

| Workflows | Agent Patterns |
|-----------|----------------|
| **Fixed path**, well-defined steps | **Open-ended**, dynamic loop |
| Predictable, easier to test | Harder to predict, emergent behavior |
| Good for repeatable tasks | Good for complex, evolving tasks |
| Less risk, lower cost | Higher risk, uncertain cost |

---

## Generic Agent Loop: Core Schematic

**Description:**  
An agent pattern is typically a **feedback loop** where the LLM:
1. Receives input / instruction from a human or environment.
2. Plans and decides next actions.
3. Acts on the environment (calls APIs, tools, databases, devices).
4. Observes results.
5. Loops back to decide what to do next.
6. Stops when goals are met.

**Schematic:**

```
[Human Input]
      │
  [LLM Agent]
      │
 ┌────────────┐
 │ Environment│
 └────────────┘
      ▲   │
      └───┘  (Feedback Loop)
```

---

## Example: Generic Agent Execution Cycle

1️⃣ **Input:**  
- "Summarize this document and email it to the team, then log the task."

2️⃣ **LLM Agent decides:**  
- "Step 1: Summarize the text"
- "Step 2: Call email API with summary"
- "Step 3: Write log entry to database"

3️⃣ **LLM performs each step**
   - Takes action → Observes outcome → Decides next step

4️⃣ **Loop:**  
   - If an action fails (e.g., email server error), the LLM may retry or adjust the plan.

5️⃣ **Stop:**  
   - When all tasks are done, report back to the user.

---

## Why It’s Powerful

✅ Can handle tasks too complex for fixed workflows  
✅ Adapts to unexpected situations  
✅ Simulates human-like reasoning and autonomy

---

## Key Challenges

❌ **Unpredictable Paths:**  
   - No fixed sequence → Harder to test and validate.

❌ **Unpredictable Costs:**  
   - Loops can run longer than expected → More API calls → Higher bill.

❌ **Quality Risk:**  
   - No guarantee of good answers every time.

❌ **Failure Handling:**  
   - Needs guardrails to prevent runaway loops or unsafe actions.

---

## Mitigation Strategies

✅ **Monitoring & Tracing:**  
   - Use tools like OpenAI SDK trace or LangSmith to watch all steps live.

✅ **Guardrails:**  
   - Add code checks, usage limits, and validations to constrain the agent’s behavior.

✅ **Timeouts & Cost Limits:**  
   - Automatically stop loops after time or cost thresholds.

---

## Summary: Agent vs. Workflow in One Picture

| Aspect | Workflow | Agent |
|--------|----------|-------|
| **Structure** | Fixed steps | Flexible loop |
| **Control** | Fully developer-defined | LLM self-directs |
| **Looping** | Rare, predefined | Frequent, dynamic |
| **Tools & APIs** | Called explicitly | Selected dynamically |
| **Use Cases** | Document processing, simple automation | Complex research, planning, orchestration |

---

## Visual Comparison

```
**Workflow**
  [Input]
     │
  [LLM 1] → [LLM 2] → [LLM 3]
     │
  [Output]

**Agent**
  [Human Input]
        │
    [LLM Agent] ↔ [Environment] (feedback loop)
        │
     [Optional: Final Output]
```

---

## Next Steps

✅ **Understand trade-offs:** More power vs. more risk.  
✅ **Learn tooling:** Monitoring, tracing, guardrails.  
✅ **Practice:** Build real agent loops in code.

Coming up: **Orchestrating LLMs & Tools**, with practical coding examples!

---
# 6️⃣ Day 3 — Orchestrating Multiple LLMs

## 📌 What we’re doing today

Today is all about:
- Getting **practical** again.
- **Calling multiple LLMs** in your code.
- Understanding how to **orchestrate** across different APIs, providers & local models.
- Experimenting with **open-source** vs **closed-source**.
- Seeing **cost vs. performance** trade-offs in practice.

---

## 💡 Key takeaways

✅ You have **full freedom** which models you use — OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Olama...  
✅ You can mix & match closed APIs with **local inference** (your own machine).  
✅ The **pattern** is the same:  
> *Prompt → Call API → Get response → Chain or parallelize as needed.*

---

## 🎭 Main “cast” of LLMs for this lab

| Model | Notes |
|-------|-------|
| **GPT-4-mini, GPT-4** | Classic OpenAI flagships |
| **Anthropic Claude 3 Sonnet** | Cheaper alternative |
| **Google Gemini 2.0 Flash** | Often free, very fast |
| **DeepSeek V3 / R1** | Impressive cost efficiency |
| **Groq (Q)** | Super-fast inference for big open-source models |
| **Olama** | Local inference of Llama or other open-source models |

> **Tip:** Always check **context window**, cost per 1k tokens & typical latency on [Vellum Leaderboard](https://vellum.ai/leaderboard).

---

## ⚙️ How to orchestrate multiple LLMs

### ✅ Same structure for each:

```python
from openai import OpenAI
from anthropic import Anthropic
from groq import Groq
# etc...

# Initialize client for each provider
client_openai = OpenAI()
client_anthropic = Anthropic()
client_groq = Groq()

# Create your request format (messages)
messages = [
    {"role": "user", "content": "What's the capital of France?"}
]

# Call each provider the same way (syntax varies a bit)
response_openai = client_openai.chat.completions.create(
    model="gpt-4o",
    messages=messages
)

response_anthropic = client_anthropic.messages.create(
    model="claude-3-sonnet-20240229",
    messages=[{"role": "user", "content": "What's the capital of France?"}]
)

response_groq = client_groq.chat.completions.create(
    model="llama3-70b-8192",
    messages=messages
)

print("OpenAI:", response_openai.choices[0].message.content)
print("Anthropic:", response_anthropic.content)
print("Groq:", response_groq.choices[0].message.content)
```

---

## ⚡️ Key orchestration patterns you’ll try

1️⃣ **Sequential chaining**
- Pass output from LLM A → LLM B → LLM C
- Classic example: Plan → Validate → Execute.

2️⃣ **Routing**
- Pick which model to call dynamically.
- E.g. short factual → fast cheap model. Complex reasoning → GPT-4.

3️⃣ **Parallelization**
- Call multiple models simultaneously.
- Compare answers → pick best or merge.

---

## ⚠️ Things to watch out for

- **API keys:** Store in `.env`. Use `load_dotenv` early.
- **Cost:** Keep an eye on token usage.
- **Latency:** Multiple calls can add delay — try async calls!
- **Output shape:** Not all responses follow the same JSON shape.

---

## 🧩 Suggested mini-experiment

Try this pattern:

```python
# Step 1 — Ask OpenAI for a complex question
q = client_openai.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Give me a tricky riddle."}]
).choices[0].message.content

print("Riddle:", q)

# Step 2 — Ask Groq (Llama3) to solve it
answer = client_groq.chat.completions.create(
    model="llama3-70b-8192",
    messages=[{"role": "user", "content": f"Solve this riddle: {q}"}]
).choices[0].message.content

print("Llama3 Answer:", answer)

# Step 3 — Ask Anthropic to evaluate the answer
eval = client_anthropic.messages.create(
    model="claude-3-sonnet-20240229",
    messages=[
        {"role": "user", "content": f"Does this answer make sense? Riddle: {q} Answer: {answer}"}
    ]
).content

print("Evaluation:", eval)
```

---

## 🗂️ Good practice

✅ Use **consistent prompt style** for each model.  
✅ Log each step → Easier debugging.  
✅ Try the same task with open-source vs closed-source → Compare output & speed.  
✅ Monitor costs if using paid APIs → use quotas.  
✅ Wrap calls with **retry logic** if API errors occur.

---

## 🎓 Next up

- More advanced **agent orchestration**
- Calling **tools & plugins** (retrievers, calculators)
- Managing **state** between calls

Get ready — today we orchestrate, tomorrow we empower!

---


