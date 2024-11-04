import matplotlib.pyplot as plt
import japanize_matplotlib  # For Japanese labels

# Data for the first plot (execution time)
numbers = [10, 20, 30, 40, 50]
no_memoization_times = [0.04, 2.988, 15.905, 946.039, 156294]  # in milliseconds
memoization_times = [0.112, 0.118, 0.135, 0.113, 0.118]  # in milliseconds

# Data for the second plot (recursion count)
no_memoization_counts = [177, 21891, 2692537, 331160281, 40730022147]
memoization_counts = [19, 39, 59, 79, 99]

# Create the first plot (execution time)
plt.figure(figsize=(10, 6))
plt.plot(numbers, no_memoization_times, label="メモ化なし", marker='o')
plt.plot(numbers, memoization_times, label="メモ化あり", marker='o')

# Add text labels for each data point
for i, txt in enumerate(no_memoization_times):
    plt.text(numbers[i], no_memoization_times[i] + 0.5, f'{txt}', fontsize=9, ha='right')
for i, txt in enumerate(memoization_times):
    plt.text(numbers[i], memoization_times[i] - 0.5, f'{txt}', fontsize=9, ha='left')

# Labeling the first plot
plt.title("フィボナッチ数の計算時間")
plt.xlabel("フィボナッチ数の項数")
plt.ylabel("経過時間 (ms)")
plt.yscale('symlog')  # Use logarithmic scale to better represent the difference
plt.legend()
plt.grid(True, which="both", linestyle='-', linewidth=1)

# Show the first plot
plt.tight_layout()
plt.show()

# Create the second plot (recursion count)
plt.figure(figsize=(10, 6))
plt.plot(numbers, no_memoization_counts, label="メモ化なし", marker='o')
plt.plot(numbers, memoization_counts, label="メモ化あり", marker='o')

# Add text labels for each data point
for i, txt in enumerate(no_memoization_counts):
    plt.text(numbers[i], no_memoization_counts[i] + 0.5, f'{txt}', fontsize=9, ha='right')
for i, txt in enumerate(memoization_counts):
    plt.text(numbers[i], memoization_counts[i] - 0.5, f'{txt}', fontsize=9, ha='left')

# Labeling the second plot
plt.title("フィボナッチ数の再帰実行回数")
plt.xlabel("フィボナッチ数の項数")
plt.ylabel("再帰実行回数")
plt.yscale('log')  # Use logarithmic scale to better represent the difference
plt.legend()
plt.grid(True, which="both", linestyle='-', linewidth=1)

# Show the second plot
plt.tight_layout()
plt.show()
