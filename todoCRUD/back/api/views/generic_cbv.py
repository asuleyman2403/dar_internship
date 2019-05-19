from rest_framework import generics
from api.models import Todo
from api.serializers import TodoSerializer


class TodoListAPIView(generics.ListCreateAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


class TodoAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
