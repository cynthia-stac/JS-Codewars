def find_nth_occurrence(substring, string, occurrence=1) : count = 0
    for i in range(len(string) - len(substring) + 1):
        if string[i:i+len(substring)] == substring:
            count += 1
            if count == occurrence:
                return i
    return -1