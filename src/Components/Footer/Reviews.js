import Script from 'next/script';

export default function Reviews() {
  return (
    <div className="rev">
      <Script
        src="https://widgets.sociablekit.com/google-reviews/widget.js"
        async
        defer
      />
      <div className="sk-ww-google-reviews" data-embed-id="25415827" />
    </div>
  );
}
