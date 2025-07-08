import type { ChecklistBlock } from '../types/checklist';

export const orsChecklistBlocks: ChecklistBlock[] = [
  {
    id: 'introduction-ors',
    title: 'Знакомство',
    isCollapsed: false,
    items: [
      {
        id: 'meeting-format-ors',
        text: 'Формат встречи, о Точке',
        completed: false
      },
      {
        id: 'client-knowledge-ors',
        text: 'Владеет знаниями о клиенте',
        completed: false
      },
      {
        id: 'activity-questions-ors',
        text: 'Вопросы по деятельности',
        completed: false
      },
      {
        id: 'meeting-tact-ors',
        text: 'Тактичность на встрече',
        completed: false
      },
      {
        id: 'meeting-structure-ors',
        text: 'Структура встречи',
        completed: false
      }
    ]
  },
  {
    id: 'conditions-ors',
    title: 'Условия',
    isCollapsed: false,
    items: [
      {
        id: 'tp-conditions-ors',
        text: 'Подтвердил ТП + условия',
        completed: false
      },
      {
        id: 'promo-discussion-ors',
        text: 'Обсудили акцию/промик',
        completed: false
      },
      {
        id: 'notifications-ors',
        text: 'Пуши, смс, телега',
        completed: false
      },
      {
        id: 'mobile-experience-ors',
        text: 'Мобильный опыт',
        completed: false
      },
      {
        id: 'card-offer-ors',
        text: 'Предложение карты',
        completed: false
      },
      {
        id: 'access-ors',
        text: 'Доступы',
        completed: false
      }
    ]
  },
  {
    id: 'products-ors',
    title: 'Продукты',
    isCollapsed: false,
    items: [
      {
        id: 'first-product-ors',
        text: 'Первый продукт',
        completed: false
      },
      {
        id: 'second-product-ors',
        text: 'Второй продукт',
        completed: false
      }
    ]
  },
  {
    id: 'closing-ors',
    title: 'Закрытие встречи',
    isCollapsed: false,
    items: [
      {
        id: 'account-activation-ors',
        text: 'Активировал счет',
        completed: false
      },
      {
        id: 'meeting-summary-ors',
        text: 'Итоги встречи',
        completed: false
      },
      {
        id: 'gift-given-ors',
        text: 'Подарок подарил',
        completed: false
      },
      {
        id: 'profile-match-ors',
        text: 'Профик соответствует встрече',
        completed: false
      }
    ]
  }
];