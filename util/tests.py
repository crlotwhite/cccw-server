import unittest
from util.issues_key import issues_key


class IssuesKeyTestCase(unittest.TestCase):
    def test_is_equal_using_theodore(self):
        key = issues_key('theodore')
        self.assertEqual(key, 'e17d15dfa9a790ed5e4418eea20f15be')

    def test_is_defferent_by_case(self):
        key = issues_key('Theodore')
        self.assertNotEqual(key, 'e17d15dfa9a790ed5e4418eea20f15be')

    def test_is_allway_same(self):
        key1 = issues_key('theodore')
        key2 = issues_key('theodore')
        self.assertEqual(key1, key2)


if __name__ == '__main__':
    unittest.main()
