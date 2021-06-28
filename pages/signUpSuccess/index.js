import React from 'react';
import Link from 'next/Link';
import { links } from '../../router';
import authenticatedRoute from '../../hocs/authenticatedRoute';

export default authenticatedRoute(() => (
  <div className="mt-10">
    <div className="grid justify-items-center">
      <div className="text-center">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">You are successfully registered</h3>
          <p className="mt-1 text-sm text-gray-600">
            <Link href={links.profilePage}>
              <span className="no-underline hover:underline cursor-pointer">Edit Profile</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
));
