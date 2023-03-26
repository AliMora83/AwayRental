import React, {useState} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import Amenities from '../Profile/Amenities';
import usaStates from '../../static/usaStates.json';
import propertyTypes from '../../static/propertyTypes.json';
import {addNewSpot} from '../../store/spots';
import {useDispatch} from 'react-redux';

export const SpotForm = ({setSelected}) => {
  const {action} = useParams();
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [type, setType] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState('');
  const [description, setDescription] = useState('');
  const [amenities, setAmenities] = useState([]);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [maxGuests, setMaxGuests] = useState(0);
  const [bedroom, setBedroom] = useState(0);
  const [bed, setBed] = useState(0);
  const [bathroom, setBathroom] = useState(0);
  const [price, setPrice] = useState(0);

  const [validateErrors, setValidateErrors] = useState([]);

  const inputHeader = text => {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  };

  const inputDescription = text => {
    return <p className="text-gray-500 text-sm">{text}</p>;
  };

  const preInput = (header, description) => {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  };

  const validate = () => {
    const errors = [];
    if (!title) errors.push("Please provide a 'Title'");
    if (!address) errors.push("Please provide a 'Address'");
    if (!city) errors.push("Please provide a 'City'");
    if (!state) errors.push("Please provide a 'State'");
    if (!country) errors.push("Please provide a 'Country'");
    if (!type) errors.push("Please provide a 'Type'");
    if (!description) errors.push("Please provide a 'Description'");
    if (amenities.length < 1) errors.push("Please provide a 'Amenities'");
    if (!checkIn) errors.push("Please provide a 'Start Date'");
    if (!checkOut) errors.push("Please provide a 'End Date'");
    if (maxGuests < 1) errors.push("Please provide a 'Max Guests'");
    if (bedroom < 1) errors.push("Please provide a 'Bedroom'");
    if (bed < 1) errors.push("Please provide a 'Bed'");
    if (bathroom < 1) errors.push("Please provide a 'Bathroom'");
    if (price < 1) errors.push("Please provide a 'Price'");

    return errors;
  };

  const saveSpot = e => {
    e.preventDefault();

    const errors = validate();

    if (errors.length > 0) {
      return setValidateErrors(errors);
    }

    const newSpot = {
      title,
      address,
      city,
      state,
      country,
      type,
      description,
      amenities,
      checkIn,
      checkOut,
      maxGuests,
      bedroom,
      bed,
      bathroom,
      price,
    };
    

    dispatch(addNewSpot({}));
    setTitle('');
    setAddress('');
    setCity('');
    setState('');
    setCountry('');
    setType('');
    setDescription('');
    setAmenities([]);
    setCheckIn('');
    setCheckOut('');
    setMaxGuests(0);
    setBedroom(0);
    setBed(0);
    setBathroom(0);
    setPrice(0);
    setValidateErrors([]);
  };

  const handleCancel = () => {
    // e.preventDefault();
    setTitle('');
    setAddress('');
    setCity('');
    setState('');
    setCountry('');
    setType('');
    setDescription('');
    setAmenities([]);
    setCheckIn('');
    setCheckOut('');
    setMaxGuests(0);
    setBedroom(0);
    setBed(0);
    setBathroom(0);
    setPrice(0);
    setValidateErrors([]);

    return <Redirect to={'/'} />;
  };

  return (
    <div className="mx-8 h-fit">
      {action === 'new' && (
        <div>
          <form>
            <div className="flex sm:flex-row flex-col items-center w-full gap-4">
              <div className="flex flex-col justify-center w-full">
                {preInput(
                  'Title',
                  'Provide a short heading/title for the property'
                )}
                <input
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  type="text"
                  placeholder="Title, ex) Friendly cozy house"
                />
              </div>
              <div className="flex flex-col justify-center w-full">
                {preInput('Property type', 'Select the type of property')}
                <select
                  className="border rounded-2xl py-2 text-center"
                  value={type}
                  onChange={e => setType(e.target.value)}>
                  <option value="" disabled>
                    --Please select a Type--
                  </option>
                  {propertyTypes.map((type, idx) => (
                    <option key={idx} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {preInput('Address', 'Address to the property')}
            <input
              value={address}
              onChange={e => setAddress(e.target.value)}
              type="text"
              placeholder="Address"
            />
            {preInput('City', '')}
            <input
              value={city}
              onChange={e => setCity(e.target.value)}
              type="text"
              placeholder="City"
            />
            <div className="flex flex-row items-center w-full gap-4">
              <div className="flex flex-col justify-center w-full">
                {preInput('State', '')}
                <select
                  className="border rounded-2xl  py-2 text-center"
                  value={state}
                  onChange={e => setState(e.target.value)}>
                  <option value="" disabled>
                    --Please select a State--
                  </option>
                  {usaStates.map((state, idx) => (
                    <option key={idx} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col justify-center w-full">
                {preInput('Country', '')}
                <input
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  type="text"
                  placeholder="Country"
                />
              </div>
            </div>

            {preInput(
              'Photos',
              'Provide a well rounded presentation of the property'
            )}
            <div className="flex gap-2">
              <input
                value={photoLink}
                onChange={e => setPhotoLink(e.target.value)}
                type="text"
                placeholder={'Add a photo url'}
              />
              <button className="bg-gray-200 px-4 rounded-2xl">
                Add&nbsp;photo
              </button>
            </div>
            <div className="mt-2 grid grid-col-3 md:grid-cols-4 lg:grid-cols-6">
              <button className="flex gap-1 justify-center items-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                <p className="text-xl text-gray-500">Upload</p>
              </button>
            </div>
            {preInput(
              'Description',
              'Description of the property, what makes it special'
            )}
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            {preInput(
              'Amenities',
              'Select all amenities available at this spot'
            )}
            <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cold-5">
              <Amenities selected={amenities} onChange={setAmenities} />
            </div>
            <h2 className="text-2xl mt-4">Rooms & beds</h2>
            <p className="text-gray-500 text-sm">
              Bedrooms, bathrooms, beds, etc.
            </p>
            <div className="grid gap-2 grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center w-full">
                <h3 className="mt-2 -mb-1 font-bold text-[17px] text-center">
                  # of Bedrooms
                </h3>
                <input
                  value={bedroom}
                  onChange={e => setBedroom(e.target.value)}
                  type="number"
                  className="w-full h-full my-1 rounded-2xl text-center border outline-none"
                />
              </div>
              <div className="flex flex-col items-center w-full">
                <h3 className="mt-2 -mb-1 font-bold text-[17px]"># of Beds</h3>
                <input
                  value={bed}
                  onChange={e => setBed(e.target.value)}
                  type="number"
                  className="w-full h-full my-1 rounded-2xl text-center border outline-none"
                />
              </div>
              <div className="flex flex-col items-center w-full">
                <h3 className="mt-2 -mb-1 font-bold text-[17px] ">
                  # of Bathrooms
                </h3>
                <input
                  className="w-full h-full my-1 rounded-2xl text-center border outline-none"
                  type="number"
                  value={bathroom}
                  onChange={e => setBathroom(e.target.value)}
                />
              </div>
            </div>
            <h2 className="text-2xl mt-4">Check in/out times</h2>
            <p className="text-gray-500 text-sm">
              Add check in and check out times
            </p>
            <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center">
                <h3 className="mt-2 -mb-1 font-bold text-[17px] text-center">
                  Check in time
                </h3>
                <input
                  value={checkIn}
                  onChange={e => setCheckIn(e.target.value)}
                  type="text"
                  placeholder="13:00"
                  className="text-center"
                />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="mt-2 -mb-1 font-bold text-[17px]">
                  Check out time
                </h3>
                <input
                  value={checkOut}
                  onChange={e => setCheckOut(e.target.value)}
                  type="text"
                  placeholder="11:00"
                  className="text-center"
                />
              </div>
              <div className="flex flex-col items-center w-full">
                <h3 className="mt-2 -mb-1 font-bold text-[17px] ">
                  Price per night
                </h3>
                <input
                  className="w-full h-full my-1 rounded-2xl text-center border outline-none"
                  type="number"
                  value={maxGuests}
                  onChange={e => setMaxGuests(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-center w-full ">
                <h3 className="mt-2 -mb-1 font-bold text-[17px]">
                  Max # of guests
                </h3>
                <input
                  className="w-full h-full my-1 rounded-2xl text-center border outline-none"
                  type="number"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
            </div>
            {validateErrors.length > 0 && (
              <div className="my-2 ml-2">
                <ul className="text-red-600 text-[13px] font-semibold ml-2">
                  {validateErrors.map((error, i) => (
                    <li key={i}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mx-28 flex sm:flex-row flex-col gap-2 items-center">
              <button onClick={saveSpot} className="primary my-3">
                Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-600 py-2 w-full rounded-2xl text-white my-3">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SpotForm;