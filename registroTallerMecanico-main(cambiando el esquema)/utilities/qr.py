import qrcode
import subprocess as sub


class GeneradorQR:
    """Esta clase genera un QR de acuerdo a la IP local actual del dispositivo"""

    def __init__(self):
        self.direccion = self.obtener_ip()
        self.img = qrcode.make(self.direccion)

    def obtener_ip(self):
        GET_IP_CMD = 'hostname -I'
        PORT = ':3000'
        raw_ip = sub.check_output(GET_IP_CMD, shell=True).decode('utf8')
        self.IP = raw_ip.split(' ')[0]
        return 'http://' + self.IP + PORT

    def mostrar_qr(self):
        self.img.show()
