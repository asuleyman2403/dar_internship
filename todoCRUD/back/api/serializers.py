from rest_framework import serializers
from api.models import Todo


class TodoSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    task = serializers.CharField(required=True)
    done = serializers.BooleanField(required=False)

    class Meta:
        model = Todo
        fields = '__all__'
