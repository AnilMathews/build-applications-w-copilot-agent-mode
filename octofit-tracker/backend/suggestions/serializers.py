from rest_framework import serializers
from .models import WorkoutSuggestion
from django.contrib.auth.models import User

class WorkoutSuggestionSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = WorkoutSuggestion
        fields = ['id', 'user', 'title', 'description', 'activity_type', 'estimated_duration', 'difficulty_level', 'is_completed', 'created_at']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Convert ObjectId to string if present
        if '_id' in representation:
            representation['_id'] = str(representation['_id'])
        return representation