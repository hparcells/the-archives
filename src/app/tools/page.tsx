import PageLayout from '@/components/PageLayout';

function Tools() {
  return (
    <PageLayout
      title='Tools and Workflow'
      description='The things that power my everyday workflow.'
    >
      <section className='stack-4'>
        <h2>Software</h2>
        <ul>
          <li>
            <strong>Development</strong>: Visual Studio Code, IntelliJ IDEA Ultimate, Windows 10/11
          </li>
          <li>
            <strong>Design</strong>: Figma
          </li>
          <li>
            <strong>Notes</strong>: Obsidian and Google Keep
          </li>
          <li>
            <strong>Editing</strong>: DaVinci Resolve, Audacity, Paint.NET
          </li>
          <li>
            <strong>Audio</strong>: VoiceMeeter Banana, Audacity, NDI, ReaPlugs, Kilohearts
          </li>
          <li>
            <strong>Fonts</strong>
            <ul>
              <li>
                <strong>Code Editors</strong>: Cascadia Code, JetBrains Mono
              </li>
              <li>
                <strong>Spreadsheets</strong>: IBM Plex Sans, IBM Plex Mono
              </li>
            </ul>
          </li>
          <li>
            <strong>Creative</strong>: FL Studio, Krita
          </li>
        </ul>
      </section>
      <section className='stack-4'>
        <h2>Hardware</h2>
        <p>
          Current desktop setup can be found at{' '}
          <a
            href='https://pcpartpicker.com/user/hparcells/saved/#view=qccBqs'
            target='_blank'
          >
            PCPartPicker
          </a>
          .
        </p>
      </section>
      <section className='stack-4'>
        <h2>Automation</h2>
        <p>
          I also utilize a suite of AutoHotkey scripts, which can be found in my GitHub repository
          at{' '}
          <a
            href='https://github.com/hparcells/ahk-scripts'
            target='_blank'
          >
            https://github.com/hparcells/ahk-scripts
          </a>
          . These scripts automate various tasks as well as filling in the gaps of various software,
          improving my efficiency and productivity.
        </p>
        <p>
          Also powered by AutoHotkey is my second keyboard dedicated to macros. While Windows treats
          every connected keyboard as a single input device, I use Interception drivers to remap the
          keys on the macro keyboard to unique combinations with F24. These are then picked up by
          AutoHotkey and bound to various functions.
        </p>
        <p>
          This was inspired by Taran Van Hermet&apos;s Premier Pro&apos;s workflow with AutoHotkey
          and macro keyboard. More information can be found in{' '}
          <a
            href='https://www.youtube.com/watch?v=Arn8ExQ2Gjg'
            target='_blank'
          >
            his video of the topic
          </a>
          .
        </p>
      </section>
    </PageLayout>
  );
}

export default Tools;
