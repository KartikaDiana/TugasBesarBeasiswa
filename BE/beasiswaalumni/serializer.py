from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken, TokenError



from .models import Akun

class AkunSerializer(serializers.ModelSerializer):
    class Meta:
        model = Akun
        fields = ['id_akun', 'nama_pendaftar', 'program_studi', 'tempat_tanggal_lahir', 'alamat', 'jenis_kelamin', 'agama', 'nomor_telepon']

from .models import Login

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ['id_login', 'id_akun', 'email', 'password', 'jenis_role']

from .models import Program

class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = ['id_program', 'jenis_program']

from .models import Beasiswa

class BeasiswaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beasiswa
        fields = ['id_beasiswa', 'id_program', 'nama_beasiswa', 'informasi', 'profil', 'jadwal_buka', 'jadwal_tutup']

from .models import Donasi

class DonasiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donasi
        fields = ['id_donasi', 'id_beasiswa', 'nama_donatur', 'jumlah_donasi',]

from .models import PengelolaanDana

class PengelolaanDanaSerializer(serializers.ModelSerializer):
    class Meta:
        model = PengelolaanDana
        fields = ['id_pengelolaanDana', 'id_pendaftaran', 'status_pencairan', 'tanggal_pencairan', 'total_dana']

from .models import PersyaratanKhusus

class PersyaratanKhususSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersyaratanKhusus
        fields = ['id_persyaratanKhusus', 'persyaratan']

from .models import Pendaftaran

class PendaftaranSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pendaftaran
        fields = ['id_pendaftaran', 'id_akun', 'id_program', 'id_persyaratanKhusus', 'status_lolos', 'IPK', 'nilai_rapot']

from .models import Pengumpulan

class PengumpulanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pengumpulan
        fields = ['id_pendaftaran', 'id_persyaratanKhusus']