# Python - Async Function

## Description
This project focuses on the basics of asynchronous programming in Python using the `asyncio` module. It covers creating coroutines, executing multiple coroutines concurrently, and measuring execution time.

## Learning Objectives
* `async` and `await` syntax
* How to execute an async program with `asyncio`
* How to run concurrent coroutines
* How to create `asyncio.Task` objects
* How to use the `random` module with async

## Tasks

| Task | File | Description |
| ---- | ---- | ----------- |
| 0. The basics of async | 0-basic_async_syntax.py | An asynchronous coroutine that waits for a random delay and returns it. |
| 1. Multiple coroutines | 1-concurrent_coroutines.py | Executing multiple coroutines at the same time using `asyncio.gather`. |
| 2. Measure the runtime | 2-measure_runtime.py | Measuring the average execution time for concurrent coroutines. |
| 3. Tasks | 3-tasks.py | Creating an `asyncio.Task` from a coroutine. |
| 4. Tasks | 4-tasks.py | Executing multiple tasks concurrently. |

## Requirements
* All files are interpreted/compiled on Ubuntu 20.04 LTS using `python3` (version 3.8.x).
* All files follow the `pycodestyle` style (version 2.5.x).
* All modules and functions have documentation (`docstrings`).
* All functions are type-annotated.
