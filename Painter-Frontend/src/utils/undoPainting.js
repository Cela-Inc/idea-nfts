export const undoPainting = (painter) => {
  if (!painter.current.undoing) {
    painter.current.saveSnapshot();

    painter.current.undoing = true;

    painter.current.snapshotIndex -= 1;

    painter.current.maxRedoIndex = painter.current.snapshotIndex;
  }

  if (painter.current.canUndo()) {
    painter.current.applySnapshot(
      painter.current.snapshots[painter.current.snapshotIndex - 1]
    );

    painter.current.snapshotIndex -= 1;
  }

  painter.current.refreshDoButtons();

  painter.current.needsRedraw = true;
};
