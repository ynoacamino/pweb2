from interpreter import draw
from chessPictures import *


knight_row = knight.join(knight.negative())

draw(knight_row.up(knight_row.verticalMirror()))
