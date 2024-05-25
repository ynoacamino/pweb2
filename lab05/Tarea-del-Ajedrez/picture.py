from colors import *
class Picture:
  def __init__(self, img):
    self.img = img;

  def __eq__(self, other):
    return self.img == other.img

  def _invColor(self, color):
    if color not in inverter:
      return color
    return inverter[color]

  def verticalMirror(self):
    img = self.img[:]
    vertical = Picture(img)

    for i, line in enumerate(self.img):
      img[i] = line[::-1]
    return vertical

  def negative(self):
    img = self.img[:]

    for i, line in enumerate(self.img):
      str = ""
      for char in line:
        str += Picture._invColor(self, char)
      img[i] = str

    return Picture(img)

  def join(self, p):
    img = self.img[:]

    for i, line in enumerate(self.img):
      str = line + p.img[i]
      img[i] = str

    return Picture(img)

  def up(self, p):
    """ Devuelve una nueva figura poniendo la figura p debajo de la
        figura actual """
    img = self.img[:]

    for line in p.img:
      img.append(line)

    return Picture(img)

  def under(self, p):
    """ Devuelve una nueva figura poniendo la figura p sobre la
        figura actual """
    img = self.img[:]

    for i, line in enumerate(self.img):
      str = ""
      for j, char in enumerate(line):
        if p.img[i][j] == " ":
          str += char
        else:
          str += p.img[i][j]
      img[i] = str

    return Picture(img)
  
  def horizontalRepeat(self, n):
    """ Devuelve una nueva figura repitiendo la figura actual al costado
        la cantidad de veces que indique el valor de n """
    piece = self.img[:]
    picture = Picture(piece)
    for i in range(n-1):
      picture = picture.join(Picture(piece))
    return picture

  def verticalRepeat(self, n):
    piece = self.img[:]
    picture = Picture(piece)

    for i in range(n-1):
      picture = picture.up(Picture(piece))
    return picture

  #Extra: Sólo para realmente viciosos 
  def rotate(self):
    """Devuelve una figura rotada en 90 grados, puede ser en sentido horario
    o antihorario"""
    return Picture(None)

