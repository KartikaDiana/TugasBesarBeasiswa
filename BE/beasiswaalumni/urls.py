from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AkunViewSet, LoginViewSet, ProgramViewSet, BeasiswaViewSet, DonasiViewSet, PengelolaanDanaViewSet, PersyaratanKhususViewSet, PendaftaranViewSet, PengumpulanViewSet

router = DefaultRouter()
router.register(r'Akun', AkunViewSet)
router.register(r'Login', LoginViewSet)
router.register(r'Program', ProgramViewSet)
router.register(r'Beasiswa', BeasiswaViewSet)
router.register(r'Donasi', DonasiViewSet)
router.register(r'PengelolaanDana', PengelolaanDanaViewSet)
router.register(r'PersyaratanKhusus', PersyaratanKhususViewSet)
router.register(r'Pendaftaran', PendaftaranViewSet)
router.register(r'Pengumpulan', PengumpulanViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
