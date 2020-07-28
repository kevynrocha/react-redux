import { showMessage, hideMessage } from './index';

describe('Layout Actions', () => {
  describe('Actions Types', () => {
    test('Deve retornar a action type SHOW_MESSAGE', () => {
      expect(showMessage.type).toEqual('SHOW_MESSAGE');
    });

    test('Deve retornar a action type HIDE_MESSAGE', () => {
      expect(hideMessage.type).toEqual('HIDE_MESSAGE');
    });
  });

  describe('Actions Creators', () => {
    test('Deve retornar a action creator showMessage { type: SHOW_MESSAGE } ', () => {
      expect(showMessage()).toEqual({ type: 'SHOW_MESSAGE' })
    });

    test('Deve retornar a action creator showMessage { type: HIDE_MESSAGE } ', () => {
      expect(hideMessage()).toEqual({ type: 'HIDE_MESSAGE' })
    })
  })
});