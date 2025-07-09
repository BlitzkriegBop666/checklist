import type { ChecklistBlock } from '../types/checklist';

// Рега/ОРС blocks
export const vksRegaOrsBlocks: ChecklistBlock[] = [
  {
    id: 'official-part-vks-rega',
    title: 'Официальная часть + ИД',
    isCollapsed: false,
    items: [
      {
        id: 'official-phrases-vks-rega',
        text: 'ОФ. Фразы и подтверждение номера для ИБ',
        completed: false
      },
      {
        id: 'identification-vks-rega',
        text: 'Идентификация',
        completed: false
      }
    ]
  },
  {
    id: 'introduction-vks-rega',
    title: 'Знакомство',
    isCollapsed: false,
    items: [
      {
        id: 'meeting-format-vks-rega',
        text: 'Формат встречи, о Точке',
        completed: false
      },
      {
        id: 'client-knowledge-vks-rega',
        text: 'Владеет знаниями о клиенте',
        completed: false
      },
      {
        id: 'activity-questions-vks-rega',
        text: 'Вопросы по деятельности',
        completed: false
      },
      {
        id: 'meeting-tact-vks-rega',
        text: 'Тактичность на встрече',
        completed: false
      },
      {
        id: 'meeting-structure-vks-rega',
        text: 'Структура встречи',
        completed: false
      }
    ]
  },
  {
    id: 'conditions-vks-rega',
    title: 'Условия',
    isCollapsed: false,
    items: [
      {
        id: 'tp-conditions-vks-rega',
        text: 'Подтвердил ТП + условия',
        completed: false
      },
      {
        id: 'promo-discussion-vks-rega',
        text: 'Обсудили акцию/промик',
        completed: false
      },
      {
        id: 'notifications-vks-rega',
        text: 'Пуши, смс, телега',
        completed: false
      },
      {
        id: 'mobile-experience-vks-rega',
        text: 'Мобильный опыт',
        completed: false
      },
      {
        id: 'card-offer-vks-rega',
        text: 'Предложение карты',
        completed: false
      },
      {
        id: 'access-vks-rega',
        text: 'Доступы',
        completed: false
      }
    ]
  },
  {
    id: 'products-vks-rega',
    title: 'Продукты',
    isCollapsed: false,
    items: [
      {
        id: 'first-product-vks-rega',
        text: 'Первый продукт',
        completed: false
      },
      {
        id: 'second-product-vks-rega',
        text: 'Второй продукт',
        completed: false
      }
    ]
  },
  {
    id: 'closing-vks-rega',
    title: 'Закрытие встречи',
    isCollapsed: false,
    items: [
      {
        id: 'meeting-summary-vks-rega',
        text: 'Итоги встречи',
        completed: false
      },
      {
        id: 'ib-access-vks-rega',
        text: 'Зашли с клиентом в ИБ, убедились что есть доступ, ориентировали на статусы',
        completed: false
      }
    ]
  }
];

// УКЭП blocks
export const vksUkepBlocks: ChecklistBlock[] = [
  {
    id: 'official-part-vks-ukep',
    title: 'Официальная часть + ИД',
    isCollapsed: false,
    items: [
      {
        id: 'official-phrases-vks-ukep',
        text: 'ОФ. Фразы и подтверждение номера для ИБ',
        completed: false
      },
      {
        id: 'identification-vks-ukep',
        text: 'Идентификация',
        completed: false
      }
    ]
  },
  {
    id: 'introduction-vks-ukep',
    title: 'Знакомство',
    isCollapsed: false,
    items: [
      {
        id: 'meeting-format-vks-ukep',
        text: 'Формат встречи, о Точке',
        completed: false
      },
      {
        id: 'client-knowledge-vks-ukep',
        text: 'Владеет знаниями о клиенте',
        completed: false
      },
      {
        id: 'activity-questions-vks-ukep',
        text: 'Вопросы по деятельности',
        completed: false
      },
      {
        id: 'meeting-tact-vks-ukep',
        text: 'Тактичность на встрече',
        completed: false
      },
      {
        id: 'meeting-structure-vks-ukep',
        text: 'Структура встречи',
        completed: false
      }
    ]
  },
  {
    id: 'conditions-vks-ukep',
    title: 'Условия',
    isCollapsed: false,
    items: [
      {
        id: 'registration-info-vks-ukep',
        text: 'Рассказал про регистрацию',
        completed: false
      },
      {
        id: 'sno-okved-vks-ukep',
        text: 'Подтвердил СНО и ОКВЭД',
        completed: false
      },
      {
        id: 'tp-promo-vks-ukep',
        text: 'Подтвердил ТП + акции',
        completed: false
      },
      {
        id: 'card-offer-vks-ukep',
        text: 'Предложение карты',
        completed: false
      },
      {
        id: 'access-vks-ukep',
        text: 'Доступы',
        completed: false
      }
    ]
  },
  {
    id: 'products-vks-ukep',
    title: 'Продукты',
    isCollapsed: false,
    items: [
      {
        id: 'first-product-vks-ukep',
        text: 'Первый продукт',
        completed: false
      },
      {
        id: 'second-product-vks-ukep',
        text: 'Второй продукт',
        completed: false
      }
    ]
  },
  {
    id: 'closing-vks-ukep',
    title: 'Закрытие встречи',
    isCollapsed: false,
    items: [
      {
        id: 'document-signing-vks-ukep',
        text: 'Подписать пакет документов с помощью ЭЦП',
        completed: false
      },
      {
        id: 'meeting-summary-vks-ukep',
        text: 'Итоги встречи',
        completed: false
      },
      {
        id: 'zp-signing-vks-ukep',
        text: 'Подписать ЗП',
        completed: false
      }
    ]
  }
];