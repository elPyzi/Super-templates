import { DialogPayload } from '@shared-libs/dialog';

type DialogTemplate = Omit<DialogPayload, 'open'>;

export const DIALOG_CONFIG = {
  CONFIRM_DELETE: (onConfirm: () => void): DialogTemplate => ({
    title: 'Подтвердите удаление',
    content: (
      <p>Вы точно хотите удалить этот элемент? Это действие нельзя отменить.</p>
    ),
    footer: (
      <div className="flex gap-2">
        <button
          className="btn btn-secondary"
          onClick={() => console.log('отмена')}
        >
          Отмена
        </button>
        <button className="btn btn-danger" onClick={onConfirm}>
          Удалить
        </button>
      </div>
    ),
  }),
};
