import type { ChecklistBlock } from '../types/checklist';

export const kepChecklistBlocks: ChecklistBlock[] = [
  {
    id: 'introduction-kep', 
    title: 'Знакомство',
    isCollapsed: false,
    items: [
      {
        id: 'meeting-format-kep',
        text: 'Формат встречи, о Точке',
        completed: false
      },
      {
        id: 'client-knowledge-kep',
        text: 'Владеет знаниями о клиенте',
        completed: false
      },
      {
        id: 'activity-questions-kep',
        text: 'Вопросы по деятельности',
        completed: false
      },
      {
        id: 'meeting-tact-kep',
        text: 'Тактичность на встрече',
        completed: false
      },
      {
        id: 'meeting-structure-kep',
        text: 'Структура встречи',
        completed: false
      }
    ]
  },
  {
    id: 'conditions-kep',
    title: 'Условия',
    isCollapsed: false,
    items: [
      {
        id: 'registration-info-kep',
        text: 'Рассказал про регистрацию',
        completed: false
      },
      {
        id: 'sno-okved-kep',
        text: 'Подтвердил СНО и ОКВЭД',
        completed: false
      },
      {
        id: 'tp-promo-kep',
        text: 'Подтвердил ТП + акции',
        completed: false
      },
      {
        id: 'card-offer-kep',
        text: 'Предложение карты',
        completed: false
      },
      {
        id: 'access-kep',
        text: 'Доступы',
        completed: false
      }
    ]
  },
  {
    id: 'products-kep',
    title: 'Продукты',
    isCollapsed: false,
    items: [
      {
        id: 'first-product-kep',
        text: 'Первый продукт',
        completed: false
      },
      {
        id: 'second-product-kep',
        text: 'Второй продукт',
        completed: false
      }
    ]
  },
  {
    id: 'closing-kep',
    title: 'Закрытие встречи',
    isCollapsed: false,
    items: [
      {
        id: 'meeting-summary-kep',
        text: 'Итоги встречи',
        completed: false
      },
      {
        id: 'gift-given-kep',
        text: 'Подарок подарил',
        completed: false
      },
      {
        id: 'profile-match-kep',
        text: 'Профик соответствует встрече',
        completed: false
      }
    ]
  }
];