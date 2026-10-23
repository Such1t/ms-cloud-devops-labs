import { describe, expect, it } from 'vitest';
import { buildNote, ValidationError } from '../src/notes';

describe('buildNote title length', () => {
  it('accepts a title of exactly 80 characters', () => {
    const note = buildNote({ title: 'a'.repeat(80) });
    expect(note.title).toHaveLength(80);
  });

  it('rejects a title longer than 80 characters', () => {
    expect(() => buildNote({ title: 'a'.repeat(81) })).toThrow(ValidationError);
  });
});
