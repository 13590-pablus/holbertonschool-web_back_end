#!/usr/bin/env python3
"""Using tasks in wait_n."""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn task_wait_random n times."""
    delays = []
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
