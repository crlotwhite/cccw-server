from django.shortcuts import render


def index(request):
    """
    First Function View as an entrance
    """
    return render(request, 'index.html')


def room(request):
    """
    it is chat service view
    - show room list.
    - start chat in the room
    """

    if request.method == 'POST':
        # when you enter specific room
        from .models import ChatRoom

        room_name = request.POST['room_name']
        chatroom = ChatRoom.objects.get(name=room_name)
        return render(
            request,
            'chatroom.html',
            {
                'room_name': chatroom.name,
                'secret': chatroom.secrets,
            }
        )
    else:
        # if other method same function like GET request.
        from .models import ChatRoom

        return render(
            request,
            'room_list.html',
            {'room_list': [x.name for x in ChatRoom.objects.all()]}
        )
