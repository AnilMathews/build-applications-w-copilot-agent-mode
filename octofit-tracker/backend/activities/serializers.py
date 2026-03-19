from rest_framework import serializers
from .models import Activity
from django.contrib.auth.models import User

class ActivitySerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Activity
        fields = ['id', 'user', 'activity_type', 'duration', 'distance', 'calories_burned', 'points_earned', 'notes', 'created_at']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Convert ObjectId to string if present
        if '_id' in representation:
            representation['_id'] = str(representation['_id'])
        return representation