import Figure, {FigureNames} from "./Figure";
import {Colors} from "../Colors";
import Cell from "../Cell";
// @ts-ignore
import whiteLogo from "../../assets/white-rook.png";
// @ts-ignore
import blackLogo from "../../assets/black-rook.png";

export default class Rook extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
        this.name = FigureNames.ROOK;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }
        if (this.cell.isEmptyVertical(target)) {
            return true;
        }
        if (this.cell.isEmptyHorizontal(target)) {
            return true;
        }
        return false;
    }
}