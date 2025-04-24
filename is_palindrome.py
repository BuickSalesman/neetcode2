s = "Was it a car or a cat I saw?"


def is_palindrome(s):
    l, r = 0, len(s) - 1

    while l < r:
        while l < r and not is_al_num(s[l]):
            l += 1
        while r > l and not is_al_num(s[r]):
            r -= 1
        if s[l].lower() != s[r].lower():
            return False
        l += 1
        r -= 1
    return True


def is_al_num(c):
    (ord('A') <= ord(c) <= ord('Z') or
     ord('a') <= ord(c) <= ord('z') or
     ord('0') <= ord(c) <= ord('9'))


print(is_palindrome(s))
