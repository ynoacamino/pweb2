from interpreter import draw
from chessPictures import *

block = square.join(square.negative())
negativeBlock = block.negative()

draw(negativeBlock.horizontalRepeat(4))