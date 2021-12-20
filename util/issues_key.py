import hashlib


def issues_key(value: str) -> str:
    def preprocess(s: str) -> str:
        return f'!{s}='

    b = bytes(preprocess(value), 'utf-8')
    enc = hashlib.md5()
    enc.update(b)
    encText = enc.hexdigest()
    return encText
