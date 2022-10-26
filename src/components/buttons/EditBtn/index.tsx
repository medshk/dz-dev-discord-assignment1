import React, { useState } from "react";
import { Link } from "react-router-dom";

import Portal from "../../modals/Portal";

export default function EditBtn({ userId }: any) {
  return (
    <Link to={`editUser/${userId}`}>
      <button className="rounded text-white bg-orange-400 py-1 px-2">
        Edit
      </button>
    </Link>
  );
}
