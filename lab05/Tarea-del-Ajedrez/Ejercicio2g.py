from interpreter import draw
from chessPictures import *

pieces_line = rock.join(knight).join(bishop).join(queen).join(king).join(bishop).join(knight).join(rock);

pawn_line = pawn.horizontalRepeat(8)

white_pieces = pawn_line.up(pieces_line)
black_pieces = pieces_line.up(pawn_line).negative()

block_square = square.join(square.negative()).up(square.negative().join(square))

white_pieces_table = block_square.horizontalRepeat(4).under(white_pieces)

black_pieces_table = block_square.horizontalRepeat(4).under(black_pieces)

table = black_pieces_table.up(block_square.horizontalRepeat(4).verticalRepeat(2)).up(white_pieces_table)

draw(table)
