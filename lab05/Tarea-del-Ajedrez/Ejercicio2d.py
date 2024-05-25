from interpreter import draw
from chessPictures import *

block = square.join(square.negative())

draw(block.horizontalRepeat(4))