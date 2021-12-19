from django.db import models


# Create your models here.
class ChatRoomManager(models.Manager):
    # ref: https://stackoverflow.com/questions/9415616/adding-to-the-constructor-of-a-django-model
    def create_chatroom(self, name):
        chat_room = self.create(name=name)
        return chat_room


class ChatRoom(models.Model):
    name = models.CharField(max_length=32)
    secrets = models.CharField(max_length=32)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return f'Chat room\'s name {self.name}'

    objects = ChatRoomManager()
