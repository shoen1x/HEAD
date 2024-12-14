export default function compilerString(inputString?: string): string {
    return (inputString || '').toLowerCase().replace(/ /g, '-');
  }
