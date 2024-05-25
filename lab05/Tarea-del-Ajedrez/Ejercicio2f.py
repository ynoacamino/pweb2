from interpreter import draw
from chessPictures import *

block = square.join(square.negative())

square_block = block.up(block.negative())



draw(square_block.horizontalRepeat(4).verticalRepeat(2))