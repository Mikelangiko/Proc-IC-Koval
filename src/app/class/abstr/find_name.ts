export type PaintToolName = 'Олівець' | 'Фломастер';

export type PaintToolNameMap = {
  [key: string]: PaintToolName;
};

export const PaintToolsNameMap: PaintToolNameMap = {
  Pencil: 'Олівець',
  Marker: 'Фломастер',
};
