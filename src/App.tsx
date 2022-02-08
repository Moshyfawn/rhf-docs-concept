import type { ReactNode } from 'react';
import { tw } from 'twind';

const LinkIcon = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 13 13"
    xmlns="http://www.w3.org/2000/svg"
    className={tw`inline-block ml-2 invisible group-hover:visible`}
    // class="jsx-1906412371 text-gray-70 ml-2 h-5 w-5"
  >
    <g fill="currentColor" fill-rule="evenodd">
      <path d="M7.778 7.975a2.5 2.5 0 0 0 .347-3.837L6.017 2.03a2.498 2.498 0 0 0-3.542-.007 2.5 2.5 0 0 0 .006 3.543l1.153 1.15c.07-.29.154-.563.25-.773.036-.077.084-.16.14-.25L3.18 4.85a1.496 1.496 0 0 1 .002-2.12 1.496 1.496 0 0 1 2.12 0l2.124 2.123a1.496 1.496 0 0 1-.333 2.37c.16.246.42.504.685.752z"></path>
      <path d="M5.657 4.557a2.5 2.5 0 0 0-.347 3.837l2.108 2.108a2.498 2.498 0 0 0 3.542.007 2.5 2.5 0 0 0-.006-3.543L9.802 5.815c-.07.29-.154.565-.25.774-.036.076-.084.16-.14.25l.842.84c.585.587.59 1.532 0 2.122-.587.585-1.532.59-2.12 0L6.008 7.68a1.496 1.496 0 0 1 .332-2.372c-.16-.245-.42-.503-.685-.75z"></path>
    </g>
  </svg>
);

const NoteIcon = () => (
  <svg
    className={tw`inline-block mr-2 `}
    width="1em"
    height="1.05em"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 12.2632L12 18.2592L1.002 18.2632C0.737486 18.2642 0.483369 18.1603 0.295486 17.9741C0.107603 17.7879 0.00132309 17.5347 0 17.2702V1.25618C0 0.708184 0.445 0.263184 0.993 0.263184H17.007C17.555 0.263184 18 0.719183 18 1.26518V12.2632ZM16 2.26318H2V16.2632H10V11.2632C10 11.0183 10.09 10.7818 10.2527 10.5988C10.4155 10.4158 10.6397 10.2988 10.883 10.2702L11 10.2632L16 10.2622V2.26318ZM15.171 12.2622L12 12.2632V15.4322L15.171 12.2622Z"
      fill="currentColor"
    ></path>
  </svg>
);

interface SectionHeadingProps {
  id: string;
  label: ReactNode;
}

const SectionHeading = ({ id, label }: SectionHeadingProps) => (
  <h2 className={tw`text-2xl my-4 group cursor-pointer`} id={id}>
    {label}
    <a href={`#${id}`} aria-hidden="true">
      <LinkIcon />
    </a>
  </h2>
);

const App = () => {
  return (
    <div
      className={tw`
        h-screen
        px-8
        py-4
        overflow-auto
        dark scroll-smooth
        dark:(bg-background text-text)
      `}
    >
      <main>
        <h1 className={tw`text-3xl`}>setError</h1>
        <p className={tw`text-lg my-2`}>
          <code className={tw`bg-border px-1 py-0.5 rounded`}>setError</code> is
          a form method that lets you manualy set field errors
        </p>
        <h2 className={tw`text-2xl my-4`}>On this page</h2>
        <ul className={tw`list-disc ml-4`}>
          <li>
            <a href="#reference">Reference</a>
          </li>
          <ul className={tw`list-disc ml-6`}>
            <li>
              <a href="#setError">
                <code className={tw`bg-border px-1 py-0.5 rounded`}>
                  setError(name, error, options)
                </code>
              </a>
            </li>
            <li>
              <a href="#arguments">Arguments</a>
            </li>
          </ul>
          <li>
            <a href="#examples">Examples</a>
          </li>
          <li>
            <a href="#video">Video Tutorial</a>
          </li>
          <li>
            <a href="#api">API</a>
          </li>
        </ul>
        <SectionHeading id="reference" label="Reference" />
        <SectionHeading
          id="useError"
          label={
            <code className={tw`bg-border px-1 py-0.5 rounded`}>
              setError(name, error, options)
            </code>
          }
        />
        <p className={tw`my-2`}>
          Call{' '}
          <code className={tw`bg-border px-1 py-0.5 rounded`}>setError</code>{' '}
          with the{' '}
          <code className={tw`bg-border px-1 py-0.5 rounded`}>name</code> of the
          form field to set the error to. Provide an error object with the error{' '}
          <code className={tw`bg-border px-1 py-0.5 rounded`}>type</code> and{' '}
          <code className={tw`bg-border px-1 py-0.5 rounded`}>message</code> to
          specify the error.
        </p>
        <code>
          <div
            className={tw`bg-surface px-8 py-4 border border-border rounded`}
          >
            <span className={tw`block`}>
              {'const { setError } = useForm()'}
            </span>
            <span className={tw`block`}>{'<button'}</span>
            <span className={tw`block pl-4`}>{'onClick={() =>'}</span>
            <span className={tw`block pl-8`}>{"setError('name', {"}</span>
            <span className={tw`block pl-12`}>{"type: 'manual',"}</span>
            <span className={tw`block pl-12`}>
              {"message: 'An Error Message'"}
            </span>
            <span className={tw`block pl-8`}>{'})'}</span>
            <span className={tw`block pl-4`}>{'}'}</span>
            <span className={tw`block`}>{'/>'}</span>
          </div>
        </code>
        <a className={tw`text-border mt-2`} href="#examples-basic">
          See more examples below
        </a>
        <SectionHeading id="arguments" label="Arguments" />
        <ul className={tw`list-disc ml-4`}>
          <li>
            <code className={tw`bg-border px-1 py-0.5 rounded`}>name</code>: The
            form field name you want to set the error to. It should be a{' '}
            <b>string</b>. More blah-blah on possible values etc.
          </li>
          <li>
            <code className={tw`bg-border px-1 py-0.5 rounded`}>error</code>:
            <ul className={tw`list-disc ml-6`}>
              <li>
                <code className={tw`bg-border px-1 py-0.5 rounded`}>type</code>:
                A type of the error you want the error to be. More blah-blah on
                what the error type means to the dev / user.
              </li>
              <li>
                <code className={tw`bg-border px-1 py-0.5 rounded`}>
                  message
                </code>
                : An <b>optional</b> error messsage you want to append to the
                error to potentially display as a helper text or in a
                notification.
              </li>
            </ul>
            <li>
              <code className={tw`bg-border px-1 py-0.5 rounded`}>options</code>
              :
              <ul className={tw`list-disc ml-6`}>
                <li>
                  <code className={tw`bg-border px-1 py-0.5 rounded`}>
                    shouldFocus
                  </code>
                  : You can <b>optionaly</b> pass this flag to focus the input
                  of the the field name when the error is set
                </li>
              </ul>
            </li>
          </li>
        </ul>

        <div
          style={{ background: 'rgba(20 158 202/.5)' }}
          className={tw`px-8 py-4 rounded my-4`}
        >
          <h3 style={{ color: 'rgba(20 158 202)' }} className={tw`text-xl`}>
            <NoteIcon />
            Note
          </h3>
          <p>
            To clear an error that hasn't been attatched to any of the input
            fields will have to be cleared using the{' '}
            <a href="https://react-hook-form.com/api/useform/clearerrors">
              <code className={tw`bg-border px-1 py-0.5 rounded`}>
                clearErrors
              </code>{' '}
            </a>
            form method
          </p>
        </div>
        <SectionHeading id="examples" label="Examples" />
        <section
          style={{
            background: 'rgb(79 98 148/.5)',
          }}
          className={tw`rounded border border-border`}
        >
          <div className={tw`flex gap-4`}>
            <button className={tw`px-4 py-2 underline `}>Single Error</button>
            <button className={tw`px-4 py-2 underline `}>Multile Errors</button>
          </div>
          <code>
            <div className={tw`bg-surface px-8 py-4 rounded`}>
              <span className={tw`block`}>
                {'const { setError } = useForm()'}
              </span>
              <span className={tw`block`}>{'<button'}</span>
              <span className={tw`block pl-4`}>{'onClick={() =>'}</span>
              <span className={tw`block pl-8`}>{"setError('name', {"}</span>
              <span className={tw`block pl-12`}>{"type: 'manual',"}</span>
              <span className={tw`block pl-12`}>
                {"message: 'An Error Message'"}
              </span>
              <span className={tw`block pl-8`}>{'})'}</span>
              <span className={tw`block pl-4`}>{'}'}</span>
              <span className={tw`block`}>{'/>'}</span>
            </div>
          </code>
        </section>
        <SectionHeading id="video" label="Video Tutorial" />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/raMqvE0YyIY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={tw`w-full aspect-video`}
        />
        <SectionHeading id="api" label="API" />
        <ul className={tw`list-disc ml-4`}>
          <li>
            <a href="https://react-hook-form.com/api/setError">
              <code className={tw`bg-border px-1 py-0.5 rounded`}>
                setError
              </code>
            </a>
          </li>
          <li>
            <a href="https://react-hook-form.com/api/useform/clearerrors">
              <code className={tw`bg-border px-1 py-0.5 rounded`}>
                clearErrors
              </code>
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default App;
