from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("", views.index, name="index"),
    path("protected/", views.protected, name="protected"),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/registry',views.register_user , name='registry'),
    path('api/portfolio',views.get_portfolio , name='get_portfolio'),
    path('api/operation',views.add_operation , name='add_operation'),

]