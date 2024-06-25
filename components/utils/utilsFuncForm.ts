export function fakeReq(toDo: any) {
  console.log("charging.....");
  return new Promise(() => {
    setTimeout(() => {
      console.log("Sending email....");
      toDo("valid");
    }, 5000);
  });
}

export function checkEmail(email: string): statues {
  const res: statues = { stat: "loading", error: null };

  const regex = /^([a-zA-Z0-9.\_%+-]+)@([a-zA-Z0-9.-])+.([a-zA-Z]+)(.[a-z]+)?$/;
  regex.test(email);
  if (regex.test(email)) {
    res.stat = "valid";
  } else {
    res.stat = "invalid";
    res.error = "This might not be an accurate email address";
  }

  return res;
}

export function checkName(name: string): statues {
  const res: statues = { stat: "loading", error: null };
  if (name.length < 1) {
    res.stat = "invalid";
    res.error = "Name is too short";
  } else if (name.length > 30) {
    res.stat = "invalid";
    res.error = "Name is too long";
  } else {
    res.stat = "valid";
    res.error = null;
  }
  return res;
}
export function checkMessage(msg: string): statues {
  const res: statues = { stat: "loading", error: null };
  if (msg.length > 500) {
    res.stat = "invalid";
    res.error = "Your message is too long, keep it under 500 char please";
  } else if (msg.length < 2) {
    res.stat = "invalid";
    res.error = "Your message is too short, i might not be able to help you";
  } else {
    res.stat = "valid";
    res.error = null;
  }
  return res;
}

export function checkMailBodyRequired(val: Values): boolean {
  if (val.name.state.stat != "valid") return false;
  if (val.email.state.stat != "valid") return false;
  if (val.message.state.stat != "valid") return false;

  return true;
}

export function resetAllEntries(values: Values) {
  values.name = { data: "", state: { stat: "initial", error: null } };
  values.email = { data: "", state: { stat: "initial", error: null } };
  values.message = { data: "", state: { stat: "initial", error: null } };
}
