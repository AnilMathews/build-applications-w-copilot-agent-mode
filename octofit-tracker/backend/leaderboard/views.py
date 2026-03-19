from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import LeaderboardEntry
from .serializers import LeaderboardEntrySerializer

class LeaderboardViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = LeaderboardEntrySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        period = self.request.query_params.get('period', 'weekly')
        return LeaderboardEntry.objects.filter(period=period).order_by('rank')[:50]