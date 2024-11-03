import matplotlib.pyplot as plt
import japanize_matplotlib # For Japanese labels

# Data for the plot
numbers = [10, 20, 30, 40, 50]
no_memoization_times = [0.04, 2.988, 15.905, 946.039, 156294]  # in milliseconds
memoization_times = [0.112, 0.118, 0.135, 0.113, 0.118]  # in milliseconds

# Create the plot
plt.figure(figsize=(10, 6))
plt.plot(numbers, no_memoization_times, label="メモ化なし", marker='o')
plt.plot(numbers, memoization_times, label="メモ化あり", marker='o')

# Add text labels for each data point
for i, txt in enumerate(no_memoization_times):
    plt.text(numbers[i], no_memoization_times[i] + 0.5, f'{txt}', fontsize=9, ha='right')
for i, txt in enumerate(memoization_times):
    plt.text(numbers[i], memoization_times[i] - 0.5, f'{txt}', fontsize=9, ha='left')

# Labeling the plot
plt.title("フィボナッチ数の計算時間")
plt.xlabel("フィボナッチ数の項数")
plt.ylabel("経過時間 (ms)")
plt.yscale('symlog')  # Use logarithmic scale to better represent the difference
plt.legend()
plt.grid(True, which="both", linestyle='-', linewidth=1)

# Show the plot
plt.tight_layout()
plt.show()
