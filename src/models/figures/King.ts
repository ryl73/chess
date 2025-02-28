import Figure, {FigureNames} from "./Figure";
import {Colors} from "../Colors";
import Cell from "../Cell";
// @ts-ignore
import whiteLogo from '../../assets/white-king.png';
// @ts-ignore
import blackLogo from "../../assets/black-king.png";

export default class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }
        if (this.cell.board.getCell(this.cell.x - 1, this.cell.y - 1).isEmpty()) {
            return true;
        }
        return false;
    }
}