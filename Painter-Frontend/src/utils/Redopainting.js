export const redoPainting = (painter) => {
  if (painter.current.canRedo()) {
    painter.current.applySnapshot(
      painter.current.snapshots[painter.current.snapshotIndex + 1]
    );

    painter.current.snapshotIndex += 1;
  }

  painter.current.refreshDoButtons();

  painter.current.needsRedraw = true;
};
