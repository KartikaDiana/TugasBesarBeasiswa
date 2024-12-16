from django.db import models

class Akun(models.Model):
    JENIS_KELAMIN_CHOICES = [
        ('Laki-laki', 'Laki-laki'),
        ('Perempuan', 'Perempuan'),
    ]

    id_akun = models.AutoField(primary_key=True)
    nama_pendaftar = models.CharField(max_length=255)
    program_studi = models.CharField(max_length=100)
    tempat_tanggal_lahir = models.CharField(max_length=100)
    alamat = models.TextField()
    jenis_kelamin = models.CharField(max_length=10, choices=JENIS_KELAMIN_CHOICES)
    agama = models.CharField(max_length=50)
    nomor_telepon = models.CharField(max_length=15)

    def __str__(self):
        return self.nama_pendaftar

# Login Model
class Login(models.Model):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('user', 'User'),
    ]

    id_login = models.AutoField(primary_key=True)
    id_akun = models.ForeignKey(Akun, on_delete=models.CASCADE)
    email = models.EmailField()
    password = models.CharField(max_length=255)
    jenis_role = models.CharField(max_length=50, choices=ROLE_CHOICES)

    def __str__(self):
        return self.email


# Program Model
class Program(models.Model):
    PROGRAM_CHOICES = [
        ('afirmasi', 'Afirmasi'),
        ('prestasi', 'Prestasi'),
    ]

    id_program = models.AutoField(primary_key=True)
    jenis_program = models.CharField(max_length=100, choices=PROGRAM_CHOICES)

    def __str__(self):
        return self.jenis_program


# Beasiswa Model
class Beasiswa(models.Model):
    id_beasiswa = models.AutoField(primary_key=True)
    id_program = models.ForeignKey(Program, on_delete=models.CASCADE)
    nama_beasiswa = models.CharField(max_length=255)
    informasi = models.TextField()
    profil = models.TextField()
    jadwal_buka = models.DateField()
    jadwal_tutup = models.DateField()

    def _str_(self):
        return self.nama_beasiswa

# Donasi Model
class Donasi(models.Model):
    id_donasi = models.AutoField(primary_key=True)
    id_beasiswa = models.ForeignKey(Beasiswa, on_delete=models.CASCADE)
    nama_donatur = models.CharField(max_length=255)
    jumlah_donasi = models.DecimalField(max_digits=12, decimal_places=2)

    def _str_(self):
        return self.nama_donatur

# Pengelolaan Dana Model
class PengelolaanDana(models.Model):
    # Pilihan status pencairan
    STATUS_CHOICES = [
        ('BELUM CAIR', 'Belum Cair'),
        ('SUDAH CAIR', 'Sudah Cair'),
        ('DALAM PROSES', 'Dalam Proses'),
    ]

    id_pengelolaanDana = models.AutoField(primary_key=True)
    id_pendaftaran = models.ForeignKey('Pendaftaran', on_delete=models.CASCADE)
    status_pencairan = models.CharField(max_length=50, choices=STATUS_CHOICES)
    tanggal_pencairan = models.DateField()
    total_dana = models.DecimalField(max_digits=12, decimal_places=2)

    def __str__(self):
        return f"Dana untuk {self.id_pendaftaran}"

# Persyaratan Khusus Model
class PersyaratanKhusus(models.Model):
    id_persyaratanKhusus = models.AutoField(primary_key=True)
    persyaratan = models.FileField(upload_to='persyaratan_khusus/', null=True, blank=True)

    def __str__(self):
        return f"Persyaratan ID: {self.id_persyaratanKhusus}"
    
# Pendaftaran Model
from django.db import models

class Pendaftaran(models.Model):
    LULUS_CHOICES = [
        ('Lolos', 'Lolos'),
        ('Tidak', 'Tidak'),
    ]

    id_pendaftaran = models.AutoField(primary_key=True)
    id_akun = models.ForeignKey(Akun, on_delete=models.CASCADE)
    id_program = models.ForeignKey(Program, on_delete=models.CASCADE)
    id_persyaratanKhusus = models.ForeignKey(PersyaratanKhusus, on_delete=models.CASCADE)
    status_lolos = models.CharField(max_length=50, choices=LULUS_CHOICES)
    IPK = models.DecimalField(max_digits=4, decimal_places=2)
    nilai_rapot = models.DecimalField(max_digits=4, decimal_places=2)

    def __str__(self):
        return f"Pendaftaran {self.id_pendaftaran} - {self.id_akun}"

#Pengumpulan Model
from django.db import models

class Pengumpulan(models.Model):
    id_pendaftaran = models.ForeignKey(Pendaftaran, on_delete=models.CASCADE)
    id_persyaratanKhusus = models.ForeignKey(PersyaratanKhusus, on_delete=models.CASCADE)

    def __str__(self):
        return f"Pengumpulan untuk Pendaftaran {self.id_pendaftaran} dan Persyaratan {self.id_persyaratanKhusus}"

    