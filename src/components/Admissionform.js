import React from 'react';

const Admissionform = () => {
  return (
    <div className="admission-forms">
      <h2>Download Admission Forms</h2>
      <p>Click the links below to download the forms:</p>
      <ul>
        <li>
          <a href="https://www.template.net/business/application-form-template/school-admission-form/" download>
            Admission Form 1 (PDF)
          </a>
        </li>
        <li>
          <a href="https://example.com/path/to/form2.docx" download>
            Admission Form 2 (DOCX)
            <button type="button">Download Form (PDF)</button>
          </a>
        </li>
      </ul>
      <div>Made by Mayuri</div>
    </div>
  );
};

export default Admissionform;
