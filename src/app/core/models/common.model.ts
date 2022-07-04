export class TableTemplate {
  matColumnDef: string;
  headerCellDef: string;
  desktopOnly?: boolean = false;
  isUrl?: string;
  isShort?: boolean;
  cssClass?: string;
  paramField?: string;
  type?: string;
  suffix?: string;
  prefix?: string;
  headerWidth?: number;
  justify?: 'center' | 'flex-start' | 'flex-end';
}
