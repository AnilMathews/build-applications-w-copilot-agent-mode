from rest_framework import serializers
from .models import LeaderboardEntry
from django.contrib.auth.models import User

class LeaderboardEntrySerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = LeaderboardEntry
        fields = ['id', 'user', 'username', 'period', 'period_date', 'points', 'rank', 'created_at']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Convert ObjectId to string if present
        if '_id' in representation:
            representation['_id'] = str(representation['_id'])
        return representation