from rest_framework import serializers
from .models import Team
from django.contrib.auth.models import User

class TeamSerializer(serializers.ModelSerializer):
    created_by = serializers.PrimaryKeyRelatedField(read_only=True)
    members = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    member_count = serializers.SerializerMethodField()

    class Meta:
        model = Team
        fields = ['id', 'name', 'description', 'created_by', 'members', 'member_count', 'total_points', 'created_at', 'updated_at']

    def get_member_count(self, obj):
        return obj.members.count()

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Convert ObjectId to string if present
        if '_id' in representation:
            representation['_id'] = str(representation['_id'])
        return representation