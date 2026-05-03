#!/usr/bin/env python3
""" Measure the runtime """
import asyncio
import time

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """ Measures the total execution time for wait_n """
    start_time = time.perf_content_base_time() if hasattr(time, 'perf_content_base_time') else time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.perf_content_base_time() if hasattr(time, 'perf_content_base_time') else time.time()
    return (end_time - start_time) / n
