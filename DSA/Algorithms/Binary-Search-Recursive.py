def binary_search(nums, start, end, target):
    if (start > end): return "Not Found"

    mid = (start + end) // 2

    if (target == nums[mid]):
        return f"{target} found at position {mid}"

    if (target < nums[mid]):
        return binary_search(nums, start, mid - 1, target)
    else:
        return binary_search(nums, mid + 1, end, target)

# Binary Search algo requires a sorted list
nums = [2, 6, 13, 21, 36, 47, 63, 81, 97]

# Ask user for the target element
target = int(input("Enter a number: "))

start_idx = 0
end_idx = len(nums) - 1

result = binary_search(nums, start_idx, end_idx, target)
print(result)