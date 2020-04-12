import { BoxProps } from 'components/Box';
import Grid, { GridPositionProps } from 'components/Grid';
import * as CSS from 'csstype';
import React, { Children, FC } from 'react';
import { ResponsiveValue } from 'styled-system';
import useTheme from 'useTheme';
import convert, { getArrayValue } from 'utils/convert';
import { parseTwin } from 'utils/gridTemplate';

export type ColumnResponsiveValue =
  | number
  | null
  | Array<number | null>
  | { [key in string | number]?: number } & { _: number };

export type SimpleGridProps = {
  columns: ColumnResponsiveValue;
  unit?: ResponsiveValue<string>;

  gap?: ResponsiveValue<CSS.GapProperty<string>>;
} & GridPositionProps & BoxProps;

const SimpleGrid: FC<SimpleGridProps> = ({ columns, unit: _unit, children, gap: _gap, ...props }) => {
  const { breakpoints } = useTheme();
  const { toArray } = convert(breakpoints);

  const cols = toArray(columns);
  const gapRow = toArray(_gap).map((g, i) => g && parseTwin(g)[1]);
  const unit = toArray(_unit);

  return (
    <Grid
      columns={cols.map((c, i) => c === null ? c : `repeat(${c}, ${getArrayValue(unit, i) ?? '1fr'})`)}
      rows={breakpoints.map((_, i) => gapRow[i] || cols[i] || unit[i]
        ? `repeat(${Math.ceil(Children.count(children) / getArrayValue(cols, i)!)}, ${getArrayValue(unit, i) ?? '1fr'})`
        : null
      )}
      gap={_gap}
      {...props}
    >
      {children}
    </Grid>
  );
};

export default SimpleGrid;
